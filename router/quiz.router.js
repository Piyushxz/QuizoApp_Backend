const express = require("express");
const quizzes = require("../db/quizzes");
const quizRouter = express.Router();

quizRouter.get("/", (req, res) => {
    res.json(quizzes); // Use res.send to send the quiz data
});

module.exports = quizRouter;
