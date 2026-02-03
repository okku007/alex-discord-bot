const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const svd = guns.find (gun => gun.name === "svd")
    const dragonav = new Discord.EmbedBuilder()
        .setTitle("SVD Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Comes With The Damage Of ${svd.baseDamage},\nThis Sniper Comes With The Firerate Of ${svd.baseFirerate},\nThis Sniper Comes WIth The Accuracy Of ${svd.baseAccuracy}`)
        .setImage('https://i.imgur.com/Mo9ibEt.jpeg')
    return message.channel.send({embeds: [dragonav]})
}