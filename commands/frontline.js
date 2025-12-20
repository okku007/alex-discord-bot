exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const frontline = new Discord.EmbedBuilder()
        .setTitle("Game Mode: Frontline")
        .setColor(Discord.Colors.Random)
        .setDescription("After spawning at a team base, kill players on the opposing team.")
        .setTimestamp()
    return message.channel.send({embeds: [frontline]});
}