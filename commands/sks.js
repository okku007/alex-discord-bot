const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const sks = guns.find (gun => gun.name === "sks")
    const skss = new Discord.EmbedBuilder()
        .setTitle("SKS Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Marksman Rifle Comes With The Damage Of ${sks.baseDamage},\nThis Marksman Rifle Comes With The FireRate Of ${sks.baseFirerate},\nThis Marksman Rifle Comes With The Accuracy Of ${sks.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐈𝐬 𝐀 𝐒𝐞𝐦𝐢 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜 𝐌𝐚𝐫𝐤𝐬𝐦𝐚𝐧 𝐑𝐢𝐟𝐥𝐞.`)
        .setImage('https://i.imgur.com/S8a3M1N.jpeg')
    return message.channel.send({embeds: [skss]});
}