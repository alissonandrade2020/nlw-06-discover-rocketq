const express = require('express')
const route = require('./route')
const path = require('path')
const server = express()

const port = process.env.PORT || 3000;

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(port, () => console.log("RODANDO"))
