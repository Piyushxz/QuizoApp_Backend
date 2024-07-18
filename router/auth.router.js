const express = require("express")
const userdata = require("../db/users")
const jwt = require('jsonwebtoken')

const loginHandler = require("../controllers/authController")
const loginRouter = express.Router()


loginRouter.route("/").post(loginHandler)



module.exports = loginRouter;