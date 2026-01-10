const express = require('express')
const app = express()


const people = require('./routers/people')

const auth = require('./routers/auth')
//req.body is where Express stores the data sent by the client in the request body.
//express.urlencoded()
/*  What extended: true means (important!)
Option	Meaning
extended: false	Uses Node’s built-in querystring parser
extended: true ⭐	Uses qs library → supports nested objects

In Express, urlencoded is middleware that lets your server read form data sent from the client.

Most simply 👇
 It parses form data and puts it into req.body.


 .filter() is a JavaScript array method used to select items from an array that match a condition.

In simple words 👇

👉 It creates a NEW array with only the elements that pass a test.

🔹 Basic syntax
array.filter((item) => condition)


If condition is true → item is kept

If condition is false → item is removed
*/
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people', people) 

app.use('/login',auth )




app.listen(5000, () =>{
    console.log("Server is listening to port 5000")
})