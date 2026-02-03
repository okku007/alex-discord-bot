exports.run = (client, message, args) => {
    const result = (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails'
    return message.channel.send(`It's ${result}`)
}