const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const m4 = guns.find (gun => gun.name === "m4")
    const m416 = new Discord.EmbedBuilder()
        .setTitle("M4 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${m4.baseDamage},\nThis Gun Has FireRate Of ${m4.baseFirerate},\nThis Gun Has Accuracy Of ${m4.baseAccuracy}.\nPretty Decent Gun For Beginners`)
        .setImage('https://i.imgur.com/fzvuaJc.png')
    return message.channel.send({embeds: [m416]});
}
