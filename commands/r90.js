const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const r9 = guns.find (gun => gun.name === "r90")
    const r90 = new Discord.EmbedBuilder()
        .setTitle("R9-0 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${r9.baseDamage},\nThis Gun Has FireRate Of ${r9.baseFirerate},\nThis Gun Has Accuracy Of ${r9.baseAccuracy}.\nHaven't Tried This Shotgun Yet.`)
        .setImage('https://i.imgur.com/S0uz6w1.jpeg')
    return message.channel.send({embeds: [r90]});
}

