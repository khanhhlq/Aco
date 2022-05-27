const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'avatar',
    category: 'info',
    aliases: ['avt'],
    run: (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const avatarURL = member.displayAvatarURL({ format: 'png', size: 4096, dynamic: true})
        const embed = new MessageEmbed()
            .setImage(avatarURL)
            .setTitle(`Avatar của thằng ${member.displayName} 👏`)
        message.channel.send({ embeds: [embed]})    }
}