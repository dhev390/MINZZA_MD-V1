const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG || 'https://telegra.ph/file/183eab090b7bf4f556465.jpg',
    ALIVE_MSG: process.env.ALIVE_MSG || '💗🪄⚞HEY.I AM MINZZA-MD.THIS TIME ALIVE NOW ⚝',
}
