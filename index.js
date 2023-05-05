const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true}))

require('dotenv').config({ path: __dirname + '/.env' })
require('./setup/express.js')(app)

app.listen(3001)