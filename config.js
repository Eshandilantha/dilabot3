const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Eshandilantha/dilabot3/blob/main/images/cd1e54ef-a13c-4061-a436-69953b5b0eb7.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 dilabot Is Alive Now😍*",
BOT_OWNER: '94784398732',  // Replace with the owner's phone number



};
