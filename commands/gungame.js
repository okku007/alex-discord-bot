exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const gungame = new Discord.EmbedBuilder()
        .setTitle("Game Mode: GunGame")
        .setColor(Discord.Colors.Random)
        .setDescription("Changing gun after eliminating enemy. First to get melee kill win.")
        .setTimestamp()
    return message.channel.send({embeds: [gungame]});
}