import { json } from 'body-parser'
const app = require('express')()
const helmet = require('helmet')

const mysql = require('mysql2/promise')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require("jsonwebtoken");

const connectionSetup = {
  host: process.env.VUE_APP_SQL_HOST,
  port: process.env.VUE_APP_SQL_PORT,
  user: process.env.VUE_APP_SQL_USER,
  password: process.env.VUE_APP_SQL_PASSWORD,
  database: process.env.VUE_APP_SQL_DATABASE,
}

class User {
  constructor(email, firstName, lastName, dob, latitude, longitude) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  get json() {
    return {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      latitude: this.latitude,
      longitude: this.longitude
    }
  }
}

app.use(json())
app.use(helmet())

app.get('/ping', (req, res) => {
  res.send('UP');
});

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const connection = await mysql.createConnection(connectionSetup)
  try {
    if (!email) {
      return res.status(400).send({
        error: 'Email is required'
      })
    }
    if (!password) {
      return res.status(400).send({
        error: 'Password is required'
      })
    }
    const [rows] = await connection.execute(
      'SELECT * FROM Users WHERE EMAIL = ?',
      [email]
    )
    if (rows.length) {
      const passwordVerified = await checkPassword(password, rows[0].Password);
      if (passwordVerified) {
        const firstName = rows[0].FirstName;
        const lastName = rows[0].LastName;
        const dob = rows[0].DOB;
        const latitude = rows[0].Latitude;
        const longitude = rows[0].Longitude;
        const user = new User(email, firstName, lastName, dob, latitude, longitude);
        res.send({
          success: true,
          user,
          JWT: generateJWTToken(user),
        })
      } else {
        res.send({
          success: false,
          errorCode: 'password',
        })
      }
    } else {
      res.send({
        success: false,
        errorCode: 'email',
      })
    }
  } catch (error) {
    res.send({
      success: false,
      errorCode: 'unknown',
    })
  }
})

app.post('/register', async (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const dob = req.body.dob;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const connection = await mysql.createConnection(connectionSetup)
  const hashedPassword = await hashPassword(req.body.password);
  try {
    const [rows] = await connection.query(
      'INSERT INTO Users (Email, Password, FirstName, LastName, DOB, Latitude, Longitude) VALUES (?,?,?,?,?,?,?)',
      [email, hashedPassword, firstName, lastName, dob, latitude, longitude]
    )
    const user = new User(email, firstName, lastName, dob, latitude, longitude);
    if (rows.affectedRows === 1) {
      res.send({
        success: true,
        user,
        JWT: generateJWTToken(user),
      })
    }
    else {
      res.send({
        success: false,
        errorCode: 'unknown',
      })
    }
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.send({
        success: false,
        errorCode: 'email',
      })
    }
    else {
      res.send({
        success: false,
        errorCode: 'unknown',
      })
    }
  }
})

app.post('/addRestaurant', async (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const website = req.body.website;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const description = req.body.description;
  // const image = req.body.image;
  const connection = await mysql.createConnection(connectionSetup)
  try {
    const [rows] = await connection.query(
      'INSERT INTO Restaurants (Name, About, Phone, Website, Image, Latitude, Longitude) VALUES (?,?,?,?,?,?,?)',
      [name, description, phone, website, "abc", latitude, longitude]
    )
    if (rows.affectedRows === 1) {
      res.send({
        success: true,
        id: rows.insertId,
      })
    }
    else {
      res.send({
        success: false,
        errorCode: 'unknown',
      })
    }
  }
  catch (error) {
    res.send({
      success: false,
      errorCode: 'unknown',
    })
  }
})

app.post('/verifyJWT', (req, res) => {
  const decoded = verifyJWTToken(req.body.token);
  // const providedEmail = req.body.email;
  if (decoded
    // && providedEmail === decoded.user.email
  ) {
    res.send({
      success: true,
      user: decoded.user,
    })
  } else {
    res.send({
      success: false,
    })
  }
});

export default app

async function hashPassword(plainTextPassword) {
  const hash = await bcrypt.hash(plainTextPassword, saltRounds)
  return hash
}

async function checkPassword(plainTextPassword, hash) {
  const result = await bcrypt.compare(plainTextPassword, hash)
  return result
}

function generateJWTToken(user) {
  const token = jwt.sign({ user }, process.env.VUE_APP_JWT_SECRET, { expiresIn: '1h' });
  return token
}

function verifyJWTToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.VUE_APP_JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}