require('dotenv').config()
const express = require('express');
const cors = require("cors")
const app = express()
const morgan = require('morgan')
const apiRouter = require('./api/index.js')
const {client} = require('./db/index')
const path = require('path') 
client.connect();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, 'build')))
app.use((error, req, res, next) => {
    console.error(error.stack)
    res.status(500).send(
        "Something Broke"
    )
})

const {PORT = 3001} = process.env;

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})