const express = require('express')
const cors = require("cors")
const app = express()
const quizRouter = require("./router/quiz.router")
const userdata = require("./db/users")
const jwt = require('jsonwebtoken')
require('dotenv').config(); // Load environment variables from .env file


const PORT = 3001;
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello WOrld");
})

app.post("/auth/login",(req,res)=>{
    const {username,password} = req.body;
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);

    if(isUserVerified){
        const token = jwt.sign({id:username},process.env.SECRET_TOKEN)

        res.json({username,token,message:"Valid User"})
    }else{
        res.status(401).send("Invalid user")
    }
})
// app.get("/quiz",(req,res)=>{
//     res.send(quizzes.data);
// })

app.use("/quiz",quizRouter);

app.listen(process.env.PORT || PORT,()=>{
    console.log("Server started");
})


