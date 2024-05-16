const express = require("express");

const userRoutes = require("./user-routes");

const chatRoutes = require("./chat-routes")

const appRouter = express.Router();

appRouter.use("/user", userRoutes);
appRouter.use("/chat", chatRoutes);

module.exports = appRouter;
