exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const domination = new Discord.EmbedBuilder()
        .setTitle("Game Mode: Domination")
        .setColor(Discord.Colors.Random)
        .setDescription("Capture and hold flags across the map to earn points for your team.")
        .setTimestamp()
    return message.channel.send({embeds: [domination]});
}