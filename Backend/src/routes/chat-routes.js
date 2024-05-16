const express = require("express");
const { genetateChatCompletion } = require("../controllers/chat-controller");
const { validate, chatCompletionValidator } = require("../utils/validators");
const { verifyToken } = require("../utils/token-manager");

const chatRoutes = express.Router();

chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken, genetateChatCompletion);

module.exports = chatRoutes;