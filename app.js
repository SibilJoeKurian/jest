const express = require('express')
const axios = require('axios')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/check', (req, res) => res.status(200).send({ status: "OK" }))


module.exports ={app}