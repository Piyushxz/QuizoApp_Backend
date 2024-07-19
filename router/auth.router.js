const express = require("express")
const userdata = require("../db/users")
const jwt = require('jsonwebtoken')

const loginHandler = require("../controllers/authController")
const signUpHandler = require("../controllers/authController")
const loginRouter = express.Router()
const signUpRouter = express.Router()

loginRouter.route("/").post(loginHandler)
signUpRouter.route("/").post(signUpHandler);



module.exports = loginRouter;
module.exports = signUpRouter;