const express = require("express");
const { app } = require("./app")

const { connectToDatabase } = require("./DB/connection");

//connections and listners
const PORT = process.env.PORT || 5000;
connectToDatabase()
   .then(()=>{
    app.listen(PORT,()=>
        console.log("server is running on PORT "+PORT)
    );
   })
   .catch((err)=>console.log(err));
