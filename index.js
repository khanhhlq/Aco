// Require the necessary discord.js and dotenv classes
const { Client, Intents } = require('discord.js')
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log("Bot is ready! ✅")
})

client.login(process.env.TOKEN)
