import { json } from 'body-parser'
const app = require('express')()
const helmet = require("helmet");

const mysql = require('mysql2/promise')
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(json())
app.use(helmet())
app.post('/login', async (req, res) => {
  const connection = await mysql.createConnection({
    host: process.env.VUE_APP_SQL_HOST,
    port: process.env.VUE_APP_SQL_PORT,
    user: process.env.VUE_APP_SQL_USER,
    password: process.env.VUE_APP_SQL_PASSWORD,
    database: process.env.VUE_APP_SQL_DATABASE,
  })
  const hashedPassword = await hashPassword(req.body.password);
  const [rows] = await connection.execute(
    'SELECT * FROM TEST WHERE EMAIL = ?',
    [req.body.email]
  )
  if (rows.length && checkPassword(rows[0].Password, hashedPassword)) {
    res.send({
      success: true,
    })
  } else {
    res.send({
      success: false,
    })
  }
})

export default app

async function hashPassword(plainTextPassword) {
    const hash = await bcrypt.hash(plainTextPassword, saltRounds);
    return hash;
}

async function checkPassword(plainTextPassword, hash) {
    const result = await bcrypt.compare(plainTextPassword, hash);
    return result;
}