const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const xpr = guns.find (gun => gun.name === "xpr50")
    const xpr50 = new Discord.EmbedBuilder()
        .setTitle("XPR-50 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Has Base Damage Of ${xpr.baseDamage},\nThis Sniper Has FireRate Of ${xpr.baseFirerate},\nThis Sniper Has Accuracy Of ${xpr.baseAccuracy}.\nXPR-50 Is Semi-Automatic Sniper And Sometimes It Feels Trash.`)
        .setImage('https://i.imgur.com/mqL1FMc.jpeg')
    return message.channel.send({embeds: [xpr50]});
}