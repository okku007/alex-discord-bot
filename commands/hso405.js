const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const hso = guns.find (gun => gun.name === "hso")
    const hso405 = new Discord.EmbedBuilder()
        .setTitle("HSO-405 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${hso.baseDamage},\nThis Gun Has FireRate Of ${hso.baseFirerate},\nThis Gun Has Accuracy Of ${hso.baseAccuracy}.\nThis Is A Slow FireRate Pump Shotgun.`)
        .setImage('https://i.imgur.com/29NrIJy.jpeg')
    return message.channel.send({embeds: [hso405]});
}

