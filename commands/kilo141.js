const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const kilo = guns.find (gun => gun.name === "kilo141")
    const kilo141 = new Discord.EmbedBuilder()
        .setTitle("KILO 141 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`Kilo 141 has the base damage of ${kilo.baseDamage}, \n Kilo 141 has the base firerate of ${kilo.baseFirerate}, \n Kilo 141 has the base accuracy of ${kilo.baseAccuracy}`)
        .setImage('https://i.imgur.com/DXVoUhc.jpeg')
    return message.channel.send({embeds: [kilo141]})
}