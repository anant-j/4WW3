import {
  validateDateOfBirth,
  validateEmail,
  validateLatitude,
  validatePassword,
} from '../mixins/validations'
import { uploadImage } from '../api/firebaseStore'
const formidableMiddleware = require('express-formidable')
const app = require('express')()
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
  windowMs: 10 * 1000, // 15 minutes
  max: 10, // limit each IP to 100 requests per windowMs
})

const mysql = require('mysql2/promise')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

const connectionSetup = {
  host: process.env.VUE_APP_SQL_HOST,
  port: process.env.VUE_APP_SQL_PORT,
  user: process.env.VUE_APP_SQL_USER,
  password: process.env.VUE_APP_SQL_PASSWORD,
  database: process.env.VUE_APP_SQL_DATABASE,
}

class User {
  constructor(email, firstName, lastName, dob, latitude, longitude) {
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.dob = dob
    this.latitude = latitude
    this.longitude = longitude
  }

  get json() {
    return {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      latitude: this.latitude,
      longitude: this.longitude,
    }
  }
}

app.use(formidableMiddleware())
app.use(helmet())
app.use(apiLimiter)

app.get('/ping', (req, res) => {
  res.send('UP')
})

app.post('/login', async (req, res) => {
  let connection
  try {
    const email = req.fields.email
    const password = req.fields.password
    if (!validateEmail(email)) {
      res.status(400).send({
        success: false,
        errorCode: 'emailInvalid',
      })
      return
    }
    if (!validatePassword(password)) {
      res.status(400).send({
        success: false,
        errorCode: 'passwordInvalid',
      })
      return
    }
    connection = await mysql.createConnection(connectionSetup)
    const [rows] = await connection.execute(
      'SELECT * FROM Users WHERE EMAIL = ?',
      [email]
    )
    if (rows.length) {
      const passwordVerified = await checkPassword(password, rows[0].Password)
      if (passwordVerified) {
        const firstName = rows[0].FirstName
        const lastName = rows[0].LastName
        const dob = rows[0].DOB
        const latitude = rows[0].Latitude
        const longitude = rows[0].Longitude
        const user = new User(
          email,
          firstName,
          lastName,
          dob,
          latitude,
          longitude
        )
        res.send({
          success: true,
          user,
          JWT: generateJWTToken(user),
        })
      } else {
        res.send({
          success: false,
          errorCode: 'passwordIncorrect',
        })
      }
    } else {
      res.status(404).send({
        success: false,
        errorCode: 'emailNotFound',
      })
    }
  } catch (error) {
    res.send({
      success: false,
      errorCode: 'unknown',
    })
  } finally {
    await connection.end()
  }
})

app.post('/register', async (req, res) => {
  let connection
  try {
    const email = req.fields.email
    const firstName = req.fields.firstName
    const lastName = req.fields.lastName
    const dob = req.fields.dob
    const latitude = req.fields.latitude
    const longitude = req.fields.longitude
    const password = req.fields.password
    if (!validateEmail(email)) {
      res.status(400).send({
        success: false,
        errorCode: 'emailInvalid',
      })
      return
    }
    if (!validatePassword(password)) {
      res.status(400).send({
        success: false,
        errorCode: 'passwordInvalid',
      })
      return
    }
    if (!validateDateOfBirth(dob)) {
      res.status(400).send({
        success: false,
        errorCode: 'dobInvalid',
      })
      return
    }
    if (!validateLatitude(latitude) || !validateLatitude(longitude)) {
      res.status(400).send({
        success: false,
        errorCode: 'latitudeLongitudeInvalid',
      })
      return
    }
    connection = await mysql.createConnection(connectionSetup)
    const hashedPassword = await hashPassword(password)
    const [rows] = await connection.query(
      'INSERT INTO Users (Email, Password, FirstName, LastName, DOB, Latitude, Longitude) VALUES (?,?,?,?,?,?,?)',
      [email, hashedPassword, firstName, lastName, dob, latitude, longitude]
    )
    const user = new User(email, firstName, lastName, dob, latitude, longitude)
    if (rows.affectedRows === 1) {
      res.send({
        success: true,
        user,
        JWT: generateJWTToken(user),
      })
    } else {
      res.status(500).send({
        success: false,
        errorCode: 'unknown',
      })
    }
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).send({
        success: false,
        errorCode: 'emailAlreadyExists',
      })
    } else {
      res.status(500).send({
        success: false,
        errorCode: 'unknown',
      })
    }
  } finally {
    await connection.end()
  }
})

app.post('/addRestaurant', async (req, res) => {
  let connection
  try {
    const name = req.fields.name
    const phone = req.fields.phone
    const website = req.fields.website
    const latitude = req.fields.latitude
    const longitude = req.fields.longitude
    const description = req.fields.description
    const imageB64 = req.fields.image
    const JWT = req.fields.token
    const decoded = verifyJWTToken(JWT)
    if (!decoded) {
      res.status(401).send({
        success: false,
        errorCode: 'unauthorized',
      })
    }
    if (!validateLatitude(latitude) || !validateLatitude(longitude)) {
      res.status(400).send({
        success: false,
        errorCode: 'latitudeLongitudeInvalid',
      })
      return
    }
    let imageURL = null
    const imageUpload = await uploadImage(imageB64.split(',')[1])
    if (imageUpload.success) {
      imageURL = imageUpload.url
    } else {
      res.status(500).send({
        success: false,
        errorCode: 'imageUploadFailed',
      })
      return
    }
    connection = await mysql.createConnection(connectionSetup)
    const [rows] = await connection.query(
      'INSERT INTO Restaurants (Name, About, Phone, Website, Image, Latitude, Longitude) VALUES (?,?,?,?,?,?,?)',
      [name, description, phone, website, imageURL, latitude, longitude]
    )
    if (rows.affectedRows === 1) {
      res.send({
        success: true,
        id: rows.insertId,
      })
    } else {
      res.status(500).send({
        success: false,
        errorCode: 'unknown',
      })
    }
  } catch (error) {
    res.send({
      success: false,
      errorCode: 'unknown',
    })
  } finally {
    await connection.end()
  }
})

app.get('/getRestaurant', async (req, res) => {
  let connection
  try {
    const id = req.query.id
    connection = await mysql.createConnection(connectionSetup)
    const [rows] = await connection.execute(
      'SELECT * FROM Restaurants WHERE ID = ?',
      [id]
    )
    if (rows.length) {
      res.send({
        success: true,
        restaurant: rows[0],
      })
    } else {
      res.status(404).send({
        success: false,
        errorCode: 'restaurantNotFound',
      })
    }
  } catch (error) {
    res.send({
      success: false,
      errorCode: 'unknown',
    })
  } finally {
    await connection.end()
  }
})

app.get('/getRestaurants', async (req, res) => {
  let connection
  try {
    const name = req.query.name
    const rating = req.query.rating
    const connection = await mysql.createConnection(connectionSetup)
    let rows
    if (name) {
      ;[rows] = await connection.execute(
        "SELECT * FROM Restaurants WHERE NAME LIKE CONCAT(?, '%')",
        [name]
      )
    } else if (rating) {
      ;[rows] = await connection.execute(
        'SELECT Restaurants.*, Rating FROM Restaurants, (SELECT RestaurantID AS ID, Avg(Rating) as Rating from Reviews GROUP BY RestaurantID) AS SUBQUERY WHERE Restaurants.ID = SUBQUERY.ID AND RATING>=?',
        [rating]
      )
    } else {
      ;[rows] = await connection.execute('SELECT * FROM Restaurants')
    }
    if (rows.length) {
      res.send({
        success: true,
        restaurant: rows,
      })
    } else {
      res.status(404).send({
        success: false,
        errorCode: 'restaurantsNotFound',
      })
    }
  } catch (error) {
    res.send({
      success: false,
      errorCode: 'unknown',
    })
  } finally {
    await connection.end()
  }
})

app.get('/getReviews', async (req, res) => {
  let connection
  try {
    const id = req.query.id
    connection = await mysql.createConnection(connectionSetup)
    const [rows] = await connection.execute(
      'SELECT Reviews.Date, Reviews.ID, Reviews.Rating, Reviews.Review, Reviews.Title, Users.FirstName, Users.LastName From Reviews, Users where Reviews.UserID = Users.Email AND Reviews.RestaurantID = ?',
      [id]
    )
    if (rows.length) {
      res.send({
        success: true,
        reviews: rows,
      })
    } else {
      res.status(404).send({
        success: false,
        errorCode: 'reviewsNotFound',
      })
    }
  } catch (error) {
    res.send({
      success: false,
      errorCode: 'unknown',
    })
  } finally {
    await connection.end()
  }
})

app.post('/addReview', async (req, res) => {
  let connection
  try {
    const restaurantId = req.fields.restaurantId
    const JWT = req.fields.token
    const title = req.fields.title
    const rating = req.fields.rating
    const review = req.fields.review
    connection = await mysql.createConnection(connectionSetup)
    const decoded = verifyJWTToken(JWT)
    if (!decoded) {
      res.status(401).send({
        success: false,
        errorCode: 'unauthorized',
      })
    }
    const [rows] = await connection.query(
      'INSERT INTO Reviews (RestaurantID, UserID, Title, Rating, Review, Date) VALUES (?,?,?,?,?,?)',
      [restaurantId, decoded.user.email, title, rating, review, new Date()]
    )
    if (rows.affectedRows === 1) {
      res.send({
        success: true,
        id: rows.insertId,
      })
    } else {
      res.status(500).send({
        success: false,
        errorCode: 'reviewNotAdded',
      })
    }
  } catch (error) {
    res.send({
      success: false,
      errorCode: 'unknown',
    })
  } finally {
    connection.end()
  }
})

app.post('/verifyJWT', (req, res) => {
  const decoded = verifyJWTToken(req.fields.token)
  const providedEmail = req.fields.email
  if (decoded && providedEmail === decoded.user.email) {
    res.send({
      success: true,
      user: decoded.user,
    })
  } else {
    res.send({
      success: false,
      errorCode: 'unauthorized',
    })
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

function generateJWTToken(user) {
  const token = jwt.sign({ user }, process.env.VUE_APP_JWT_SECRET, {
    expiresIn: '1h',
  })
  return token
}

function verifyJWTToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.VUE_APP_JWT_SECRET)
    return decoded
  } catch (error) {
    return null
  }
}
