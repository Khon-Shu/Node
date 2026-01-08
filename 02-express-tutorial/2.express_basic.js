const express = require('express')
const app = express()


app.get('/', (req, res) =>{
    res.status(200).send("This is The Home page")
})

app.get('/about' , (req,res) =>{
    res.status(200).send("This is about us page")
})

app.all('*',(req,res) =>{
    res.status(404).send("<h1>Error logging to this page")
})
app.listen(5000, ()=>{
    console.log("Server is listening to port 5000....")
})