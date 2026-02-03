const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const by = guns.find (gun => gun.name === "by15")
    const by15 = new Discord.EmbedBuilder()
        .setTitle("BY15 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Shotgun Has Damage Of ${by.baseDamage},\nThis Shotgun Has FireRate Of ${by.baseFirerate},\nThis Shotgun Has Accuracy Of ${by.baseAccuracy}.\n𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔 𝗕𝗮𝘀𝗶𝗰 𝗣𝘂𝗺𝗽 𝗦𝗵𝗼𝘁𝗴𝘂𝗻.`)
        .setImage('https://i.imgur.com/Z1X4JXS.jpeg')
    return message.channel.send({embeds: [by15]});
}