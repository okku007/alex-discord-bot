const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const hs = guns.find (gun => gun.name === "hs")
    const hs2126 = new Discord.EmbedBuilder()
        .setTitle("HS2126 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Shotgun Has Damage Of ${hs.baseDamage},\nThis Shotgun Has FireRate Of ${hs.baseFirerate},\nThis Shotgun Has Accuracy Of ${hs.baseAccuracy},\n𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔 𝗕𝘂𝗿𝘀𝘁 𝗦𝗵𝗼𝘁𝗴𝘂𝗻.`)
        .setImage('https://i.imgur.com/Si6d893.jpeg')
    return message.channel.send({embeds: [hs2126]});
}