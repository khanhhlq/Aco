module.exports = {
    name: 'say',
    category: 'fun',
    aliases: [''],
    run: (client, message, args) => {
        if (message.deletable) message.delete()
        message.channel.send(args.join(' '))
    }
}