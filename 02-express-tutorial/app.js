// MiddleWare are function that execute during the request to the server
//each middleware has access to access and respose object

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
app.use([authorize,logger])
//if it is used here we can literally use logger in /about/personal/api everywhere in about
//the app.use only expects the middle ware function must have req, res and next()

app.get('/' , (req, res) =>{
    res.send("This is home page")
  
})

app.get('/about',  (req, res) =>{
    res.send("This is about us page")
})
app.get('/about/personal',  (req, res) =>{
    res.send("This is about us page")
})
app.get('/about/personal/api',  (req, res) =>{
    res.send("This is about us page")
})



app.listen(5000, ()=>{
    console.log("Server is listening in port 5000")
})