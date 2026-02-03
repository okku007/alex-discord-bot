const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const spr = guns.find (gun => gun.name === "spr")
    const spr50 = new Discord.EmbedBuilder()
        .setTitle("SPR-50 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Marksman Rifle Comes With The Damage Of ${spr.baseDamage},\nThis Marksman Rifle Comes With The FireRate Of ${spr.baseFirerate},\nThis Marksman Rifle Comes With The Accuracy Of ${spr.baseAccuracy}\n𝐀 𝐁𝐨𝐥𝐭 𝐀𝐜𝐭𝐢𝐨𝐧 𝐌𝐚𝐫𝐤𝐬𝐦𝐚𝐧 𝐑𝐢𝐟𝐥𝐞.`)
        .setImage('https://i.imgur.com/kGIz5DV.jpeg')
    return message.channel.send({embeds: [spr50]});
}