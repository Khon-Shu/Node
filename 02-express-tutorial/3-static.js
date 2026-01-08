const express = require('express')
const app = express()

const path = require('path')

app.use(express.static('./utils'))

app.get('/about' , (req,res)=>{
    res.send("This is about us page")
})

// app.get('/' , (req,res) =>{
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
// })

app.all('*', (req, res) =>{
        res.status(404).send("Error finding this page")
})


app.listen(5000, () =>{
    console.log("Server is listening to port 5000.....")
})

/*
By "static files," we mean files that don't change dynamically based on user input—think CSS stylesheets, images (JPG/PNG), client-side JavaScript, and fonts.

Without this middleware, if your index.html tries to link to a file like style.css, the browser will request it, but Express won't know how to "find" and "send" it.

How it works
When you use app.use(express.static('public')), you are telling Express: "If a request comes in for a file that I haven't specifically defined a route for, look inside the 'public' folder and see if it's there."
*/