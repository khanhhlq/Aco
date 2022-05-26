// Require the necessary discord.js and dotenv classes
const { Client, Intents, Presence, MessageEmbed } = require('discord.js')
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log("Bot cc đã sẵn sàng hoạt động ✅")
    client.user.setPresence(
        {
            activities: [{ 
                name: 'Chào cc nhé 🐞',
                type: 'STREAMING'
            }], 
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
        message.reply(`**🏓 Pong cc!** ***Ping của mày hiện tại là*** \`${client.ws.ping}ms\``)
    } else if (command === 'say'){
        if (message.deletable) message.delete()
        message.channel.send(args.join(' '))
    } else if (command === 'avatar'){
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const avatarURL = member.displayAvatarURL({ format: 'png', size: 4096, dynamic: true})
        const embed = new MessageEmbed()
            .setImage(avatarURL)
            .setTitle(`Avatar của thằng ${member.displayName} 👏`)
        message.channel.send({ embeds: [embed]})
    }   
 
})

client.login(process.env.TOKEN)
