 const express = require("express");
 const { User } = require("../DB_Schemas/User");
 const { OpenAI } = require("openai");
 const { configureOpenAI } = require("../config/openai-config");
 require('dotenv').config();

 const genetateChatCompletion = async (req, res, next) => {
    const { message } = req.body;

    try {

        const user = await User.findById(res.locals.jwtData.id);
        if(!user)
            return res.status(401).json({message:"User not registered OR Token malfunctioned"});
        
        //grab chats of user
        const chats = user.chats.map(({role, content}) => ({role, content}));
        chats.push({ content: message, role: "user"});
        user.chats.push({content: message, role: "user"});

        //send all chats with new one to openAI API 
        // const config = configureOpenAI();
        // const openai = new OpenAI({
        //     apikey: process.env.OPEN_AI_SECRET,
        //     organization: process.env.OPENAI_ORAGANIZATION_ID,
        // });
        
        const openai = new OpenAI({
            apiKey: "sk-proj-RRXgymwyigGF7uTXzvhST3BlbkFJ0WDtoG5Q9mPAhIPpDVVS", // defaults to process.env["OPENAI_API_KEY"]
          });
        //get latest response
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: chats ,
        });
        console.log(chatResponse.choices);
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(500).json({ chats: user.chats });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
 }

 module.exports = { genetateChatCompletion };