// Require the necessary discord.js and dotenv classes
const { Client, Intents, Presence } = require('discord.js')
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log("Bot is ready! ✅")
    client.user.setPresence(
        {
            activities: [{ name: 'Aco'}], 
            status: "dnd" 
        }
    )
})

client.on('messageCreate', message => {
    const prefix = 'a!'
    const args = message.content.slice(prefix.length).trim().split(' ')
    const command = args.shift().toLowerCase()
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return
    if (command === 'ping'){
        message.reply(`**🏓 Pong!** ***Your ping is currently*** \`${client.ws.ping}ms\``)
    } else if (command === 'say'){
        if (message.deletable) message.delete()
        message.channel.send(args.join(' '))
    } 
})

client.login(process.env.TOKEN)
