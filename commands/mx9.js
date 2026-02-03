const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const mx = guns.find (gun => gun.name === "mx9")
    const mx9 = new Discord.EmbedBuilder()
        .setTitle("MX9 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${mx.baseDamage}\nThis SMG Comes With The FireRate Of ${mx.baseFirerate},\nThis SMG Comes With The Accuracy Of ${mx.baseAccuracy},\n𝐏𝐫𝐞𝐭𝐭𝐲 𝐆𝐨𝐨𝐝 𝐅𝐢𝐫𝐞𝐑𝐚𝐭𝐞.`)
        .setImage('https://i.imgur.com/8MOy29U.jpeg')
    return message.channel.send({embeds: [mx9]})
}

