exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const snd = new Discord.EmbedBuilder()
        .setTitle("Game Mode: Search And Destroy")
        .setColor(Discord.Colors.Random)
        .setDescription("Round Based mode. Destroy one of tow objectives site on the map using a c4 or kill all enemy.")
        .setTimestamp()
    return message.channel.send({embeds: [snd]});
}