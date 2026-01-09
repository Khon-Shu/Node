const express = require('express')
const app = express()
const {products} =require('./data')


app.get('/' , (req, res) =>{
    res.send("<h1>this is home page</h1>")
})

app.get('/api/products', (req, res) =>{
    const specificProducts = products.map((product) =>{
        const {id, name , desc} = product
        return{id, name , desc};
    })
    res.json(specificProducts)
})

app.get('/api/products/:productId', (req, res)=>{
   const  id = req.params.productId

   const singleProduct = products.find((product) => product.id ===Number(id)
      
)
   if(!singleProduct){
     return res.send("<h1>The product id was not found ")

   }
   return  res.json(singleProduct)
})


app.get('/about/api/v1/filter' , (req, res)=>{
    const {limit, search} = req.query
    let sortedproduct = [...products]

    if(search){
        sortedproduct = products.filter((product) =>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedproduct = products.slice(0, Number(limit));
    }

    if(sortedproduct.length <1){
        return res.status(200).send("<h1> The required query is not found<h1>")
    }

    res.status(200).json(sortedproduct)
})


app.listen(5000, ()=>{
    console.log("listening to port number 5000")
})


// In Express.js, params (or route parameters) are dynamic values taken from the URL path. nedded /:id
// query they are basically the query for like filling its in the url after ?search=a&limit=5
//these are both executed in request eg: req.params, req.query