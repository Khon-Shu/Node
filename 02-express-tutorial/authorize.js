

const authorize = (req, res, next)=>{
    const {user} = req.query
    if(user === "john"){
        req.user = {name :"John" , userid : 3}
        // res.send(`welcome ${req.user.name} and id ${req.user.userid}`)
        next()
        
    }
    else{
        res.status(401).send("Error finding user")
        next()
    }


}

module.exports= authorize;