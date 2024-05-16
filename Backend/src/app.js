const express = require("express");

const appRouter = require("./routes/index");

require('dotenv').config();

const  cookieParser  = require("cookie-parser");

const cors = require("cors");

const app = express();

//middleware
app.use(cors({origin:"http://localhost:5173", credentials:true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api/v1", appRouter);

module.exports = { app };