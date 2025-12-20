const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const m21 = guns.find (gun => gun.name === "m21")
    const m21ebr = new Discord.EmbedBuilder()
        .setTitle("M21-EBR Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Has Base Damage Of ${m21.baseDamage},\nThis Sniper Has FireRate Of ${m21.baseFirerate},\nThis Sniper Has Accuracy Of ${m21.baseAccuracy},\nSemi-Automatic Sniper With High Damage.`)
        .setImage('https://i.imgur.com/YhLLCpL.jpeg')
    return message.channel.send({embeds: [m21ebr]});
}