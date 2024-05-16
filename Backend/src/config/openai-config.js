const { Configuration } = require("openai");
require('dotenv').config();

const  configureOpenAI = () =>  {
     const config  = new Configuration({
        apiKey: process.env.OPEN_AI_SECREAT,
        organization: process.env.OPENAI_ORGANIZATION_ID
     });
     return config;
}

module.exports = { configureOpenAI };