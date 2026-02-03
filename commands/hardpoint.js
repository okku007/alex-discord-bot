exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const hardpoint = new Discord.EmbedBuilder()
        .setTitle("Game Mode: Domination")
        .setColor(Discord.Colors.Random)
        .setDescription("Capture the hill which rotates location periodically to earn points for your team.")
        .setTimestamp()
    return message.channel.send({embeds: [hardpoint]});
}