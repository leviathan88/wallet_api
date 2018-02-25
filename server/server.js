require('./config/config')

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const { PORT, DEV_PORT } = require('./constants')
const mongoose = require('./mongoose')
const { initRestAPI } = require('./api/api')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(logger('dev'))
app.set(PORT, process.env.PORT || DEV_PORT)

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

initRestAPI(app)

app.listen(app.get(PORT), () => {
    console.log(`listening at port ${app.get(PORT)}`)
})

module.exports = {
    app
}