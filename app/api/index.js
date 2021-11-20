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
app.post('/login', async (req, res) => {
  const connection = await mysql.createConnection(connectionSetup)
  const [rows] = await connection.execute(
    'SELECT * FROM TEST WHERE EMAIL = ?',
    [req.body.email]
  )
  if (rows.length) {
    const passwordVerified = await checkPassword(req.body.password, rows[0].Password);
    if (passwordVerified) {
      res.send({
        success: true,
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
})

// app.post('/register', async (req, res) => {
//   const connection = await mysql.createConnection(connectionSetup)
//   const hashedPassword = await hashPassword(req.body.password);
//   // TODO
// })

export default app

async function hashPassword(plainTextPassword) {
  const hash = await bcrypt.hash(plainTextPassword, saltRounds)
  return hash
}

async function checkPassword(plainTextPassword, hash) {
  const result = await bcrypt.compare(plainTextPassword, hash)
  return result
}
