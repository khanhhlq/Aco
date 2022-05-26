module.exports = {
    name: 'ping',
    category: 'info',
    aliases: [''],
    run: (client, message, args) => {
        message.reply(`**🏓 Pong cc!** ***Ping của mày hiện tại là*** \`${client.ws.ping}ms\``)
    }
}