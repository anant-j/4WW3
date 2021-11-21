import { json } from 'body-parser'
const app = require('express')()
const helmet = require('helmet')

const mysql = require('mysql2/promise')
const bcrypt = require('bcrypt')
const saltRounds = 10

const connectionSetup = {
  host: process.env.VUE_APP_SQL_HOST,
  port: process.env.VUE_APP_SQL_PORT,
  user: process.env.VUE_APP_SQL_USER,
  password: process.env.VUE_APP_SQL_PASSWORD,
  database: process.env.VUE_APP_SQL_DATABASE,
}
app.use(json())
app.use(helmet())

app.get('/ping', (req, res) => {
  res.send('UP');
});

app.post('/login', async (req, res) => {
  const connection = await mysql.createConnection(connectionSetup)
  try {
  const [rows] = await connection.execute(
    'SELECT * FROM Users WHERE EMAIL = ?',
    [req.body.email]
  )
  if (rows.length) {
    const passwordVerified = await checkPassword(req.body.password, rows[0].Password);
    if (passwordVerified) {
      res.send({
        success: true,
        firstname: rows[0].FirstName,
        lastname: rows[0].LastName,
        email: rows[0].Email,
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
  const connection = await mysql.createConnection(connectionSetup)
  const hashedPassword = await hashPassword(req.body.password);
  // const latitude = req.body.latitude;
  // const longitude = req.body.longitude;
  const latitude = 40.730610;
  const longitude = -73.935242;
  // console.log(req.body.email, hashedPassword, req.body.firstName, req.body.lastName, req.body.dob, latitude, longitude)
  try {
    const [rows] = await connection.query(
      'INSERT INTO Users (Email, Password, FirstName, LastName, DOB, Latitude, Longitude) VALUES (?,?,?,?,?,?,?)',
      [req.body.email, hashedPassword, req.body.firstName, req.body.lastName, req.body.dob, latitude, longitude]
    )
    if (rows.affectedRows === 1) {
      res.send({
        success: true,
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
      })
    }
    return
  } catch (error) {
    if(error.code === 'ER_DUP_ENTRY') {
    res.send({
      success: false,
      errorCode: 'email',
    })}
    else{
      res.send({
        success: false,
        errorCode: 'unknown',
      })
    }
  }
})

export default app

async function hashPassword(plainTextPassword) {
  const hash = await bcrypt.hash(plainTextPassword, saltRounds)
  return hash
}

async function checkPassword(plainTextPassword, hash) {
  const result = await bcrypt.compare(plainTextPassword, hash)
  return result
}
