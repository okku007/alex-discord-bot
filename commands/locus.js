const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const locus = guns.find (gun => gun.name === "locus")
    const locuus = new Discord.EmbedBuilder()
        .setTitle("Locus Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Has Base Damage Of ${locus.baseDamage},\nThis Sniper Has FireRate Of ${locus.baseFirerate}\nThis Sniper Has Accuracy Of ${locus.baseAccuracy}.\nBolt Action Sniper Rifle With Pretty High Damage.`)
        .setImage('https://i.imgur.com/IICVMG0.jpeg')
    return message.channel.send({embeds: [locuus]});
}