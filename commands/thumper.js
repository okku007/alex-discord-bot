const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const thumper = guns.find (gun => gun.name === "thumper")
    const thumperr = new Discord.EmbedBuilder()
        .setTitle("Thumper Base Stats")
        .setColor(Discord.Colors.Random)
        .setImage('https://i.imgur.com/RxdAydR.jpeg')
        .setDescription(`Thumper has base damage of ${thumper.baseDamage}, \n Thumper has base Accuracy of ${thumper.baseAccuracy}, \n Thumper has base Firerate of ${thumper.baseFirerate}`)
    return message.channel.send({embeds: [thumperr]})
}