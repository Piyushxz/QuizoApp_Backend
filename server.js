const express = require('express')
const cors = require("cors")
const app = express()
const quizRouter = require("./router/quiz.router")
const {loginRouter,signUpRouter} = require("./router/auth.router")
const routeNotFound = require("./middlerware/routeNotFound")
const categoryRouter = require("./router/category.router")
const quizzes = require('./db/quizzes')

require('dotenv').config(); // Load environment variables from .env file


const PORT = 3001;
app.use(cors());
app.use(express.json());




// app.get("/quiz",(req,res)=>{
//     res.send(quizzes.data);
// })
app.use("/categories",categoryRouter)
app.use("/quiz",quizRouter);
app.use("/auth/login",loginRouter);
app.use("/auth/signup",signUpRouter);
app.use(routeNotFound);

app.listen(process.env.PORT || PORT,()=>{
    console.log("Server started");
})


