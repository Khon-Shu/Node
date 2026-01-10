const express = require('express')
const router = express.Router()

let {people} =require('../data')

router.get('/' , (req, res) =>{
    res.status(200).json({status: true, data : people })    
})


router.post('/' , (req, res) =>{
    const {name} = req.body
    if(!name){
        res.status(400).json({success: false, msg: "please provide valuable information"})
    }
   res.status(201).json({success: true, data: name})
})

router.post('/' ,(req,res) =>{
    const {name} = req.body
    if(!name){
        res.status(400).json({success: false, msg: "please provide valuable information"})
    }
   res.status(201).json({success: true, data: [...people, name]})
})

router.put('/:id', (req,res) =>{
    const {name} = req.body
    const {id} = req.params

    const person = people.find((people) =>{
        people.id === Number(id)
    })

    if(!person){
       return res.status(404).json( {success: false, msg:`Person not found with id :${id}`})
    }

    const newPerson = people.map((person) =>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })

    res.status(200).json({sucess:true, data: newPerson})
})

router.delete('/api/people/:id' , (req, res) =>{
    const person = people.find((person) =>
        person.id === Number(req.params.id)
    )

    if(!person){
       return res.status(404).json({success: false, msg:"No such id exists"})
    }

   const newPeople = people.filter((person) =>
        person.id !== Number(req.params.id)
   )
    return res.status(200).json({ success: true, data: newPeople })
})

module.exports = router