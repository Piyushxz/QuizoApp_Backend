const express = require('express')
const quizzes = require("./db/quizzes")
const cors = require("cors")
const app = express()


const PORT = 3001;
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello WOrld");
})

app.get("/quiz",(req,res)=>{
    res.send(quizzes.data);
})

app.listen(process.env.PORT || PORT,()=>{
    console.log("Server started");
})


