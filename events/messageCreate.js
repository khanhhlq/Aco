module.exports = (client, message) => {
    const prefix = 'a!'
    const args = message.content.slice(prefix.length).trim().split(' ')
    const cmd = args.shift().toLowerCase()
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return 
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if (command) command.run(client, message, args)
}