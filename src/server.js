const express = require('express')

const app = express()

const hostname = 'localhost'

const port = 8017

app.get('/', function (req, res) {
    res.send('<h1>Hellow World</h1>')
})

app.listen(port, hostname, () => {
    console.log(`Hello Maxxo, Running server at http://${hostname}:${port}/`)
})