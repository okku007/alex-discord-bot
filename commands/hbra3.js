const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const hbra = guns.find (gun => gun.name === "hbra3")
    const hbra3 = new Discord.EmbedBuilder()
        .setTitle("HBRa3 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${hbra.baseDamage},\n This Gun Has Base Firerate Of ${hbra.baseFirerate},\n This Gun Has Base Accuracy Of ${hbra.baseAccuracy}`)
        .setImage('https://i.imgur.com/23TXvU5.jpeg')
        return message.channel.send({embeds: [hbra3]});
}

