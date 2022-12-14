require('dotenv').config()
const express = require('express');
const app = express()
const morgan = require('morgan')
const apiRouter = require('./api/index.js')
const {client} = require('./db/index')
client.connect();


app.use(morgan('dev'));
app.use(express.json())
app.get('/api', (req, res, next) => {
    res.send({
        message: 'Hello World'
    })
})
app.use('/api', apiRouter)

app.use((error, req, res, next) => {
    res.send(
        error
    )
})

const {PORT = 3001} = process.env;

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})