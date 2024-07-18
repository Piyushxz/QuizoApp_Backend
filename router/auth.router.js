const express = require("express")
const userdata = require("../db/users")
const jwt = require('jsonwebtoken')


const loginRouter = express.Router()


loginRouter.route("/").post((req,res)=>{
        const {username,password} = req.body;
        const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
    
        if(isUserVerified){
            const token = jwt.sign({id:username},process.env.SECRET_TOKEN)
    
            res.json({username,token,message:"Valid User"})
        }else{
            res.status(401).send("Invalid user")
        }
    })



module.exports = loginRouter;