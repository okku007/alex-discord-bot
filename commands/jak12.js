const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const jak = guns.find (gun => gun.name === "jak12")
    const jak12 = new Discord.EmbedBuilder()
        .setTitle("JAK-12 Base Stats")
        .setColor(Discord.Colors.Random)
        .setImage('https://i.imgur.com/xdgSgo9.jpeg')
        .setDescription(`Jak 12 has base damage of ${jak.baseDamage}, \n Jak 12 has base Accuracy of ${jak.baseAccuracy}, \n Jak 12 has base Firerate of ${jak.baseFirerate}`)
    return message.channel.send({embeds: [jak12]})
}