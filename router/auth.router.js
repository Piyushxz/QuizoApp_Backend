const express = require("express")
const userdata = require("../db/users")
const jwt = require('jsonwebtoken')

const {loginHandler,signUpHandler} = require("../controllers/authController")

const loginRouter = express.Router()
const signUpRouter = express.Router()

loginRouter.route("/").post(loginHandler)
signUpRouter.route("/").post(signUpHandler);




module.exports = {signUpRouter,loginRouter};