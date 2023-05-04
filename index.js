const express = require('express')
const app = express()

require('dotenv').config({ path: __dirname + '/.env' })
require('./setup/express.js')(app)

app.listen(3001)