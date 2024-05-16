const mongoose = require("mongoose");

require('dotenv').config();

async function connectToDatabase(){
    try {
        await mongoose.connect("mongodb+srv://new_user18:user123@cluster0.bazvvyc.mongodb.net/Chatbot");
        console.log("database is connected")
    } catch (error) {
        console.log(error);
        throw new Error("Could not Connect to database");
    }
}

async function disconnectToDatabase(){
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Could not Disconnect from database");
    }
}

module.exports = { connectToDatabase , disconnectToDatabase};