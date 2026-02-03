const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const d13 = guns.find (gun => gun.name === "d13")
    const d13sector = new Discord.EmbedBuilder()
        .setTitle("D13 Sector Base Stats")
        .setColor(Discord.Colors.Random)
        .setImage('https://i.imgur.com/Gz5j8w1.jpeg')
        .setDescription(`D13 Sector has base damage of ${d13.baseDamage}, \n D13 Sector has base Accuracy of ${d13.baseAccuracy}, \n D13 Sector has base Firerate of ${d13.baseFirerate}`)
    return message.channel.send({embeds: [d13sector]})
}