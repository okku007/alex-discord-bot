const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const shorty = guns.find (gun => gun.name === "shorty")
    const shortyy = new Discord.EmbedBuilder()
        .setTitle("Shorty Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With The Damage Of ${shorty.baseDamage},\nThis Gun Has FireRate Of ${shorty.baseFirerate},\nThis Gun Has Accuracy Of ${shorty.baseAccuracy}.\n𝐀 𝐒𝐚𝐰𝐞𝐝 𝐎𝐟𝐟.`)
        .setImage('https://i.imgur.com/zMvVYFR.jpeg')
    return message.channel.send({embeds: [shortyy]});

}
