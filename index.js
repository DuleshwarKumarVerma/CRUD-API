const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// init the app
const app = express()

mongoose.connect('mongodb://localhost/naukri-khoje')
mongoose.Promise = global.Promise


app.use(bodyParser.json())

app.use('/api', require('./routes/api'))

app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message })
  })
  
app.listen(process.env.port || 4000, function() {
  console.log('ready for accept request')
})