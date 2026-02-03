const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const arctic = guns.find (gun => gun.name === "arctic50")
    const arctic50 = new Discord.EmbedBuilder()
        .setTitle("Arctic 50 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Has Base Damage Of ${arctic.baseDamage},\nThis Sniper Has FireRate Of ${arctic.baseFirerate},\nThis Sniper Has Accuracy Of ${arctic.baseAccuracy}.\nThis Is Also A Semi Automatic Sniper.`)
        .setImage('https://i.imgur.com/1h16gLS.jpeg')
    return message.channel.send({embeds: [arctic50]});
}

