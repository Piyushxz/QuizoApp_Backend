const express = require("express");
const quizzes = require("../db/quizzes");
const quizRouter = express.Router();
const authVerify = require("../middlerware/authVerify")
quizRouter.route("/")
    .get(authVerify, (req, res) => {
        res.json(quizzes)
    });

module.exports = quizRouter;
