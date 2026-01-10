const express = require('express')
const router = express.Router()

router.post('/' , (req, res) =>{
    const {name} = req.body
    if(name){
        res.status(200).send(`Welcome ${name}`)
    }else{
        res.send("Give required creadentails")
    }
})

module.exports = router