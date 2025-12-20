exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const tdm = new Discord.EmbedBuilder()
        .setTitle("Game Mode : Team Deathmatch")
        .setColor(Discord.Colors.Random)
        .setDescription("Defeat players on the opposing team.")
        .setTimestamp()
    return message.channel.send({embeds: [tdm]});   
}