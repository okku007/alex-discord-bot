const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const cordite = guns.find (gun => gun.name === "cordite")
    const corditee = new Discord.EmbedBuilder()
        .setTitle("Cordite Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${cordite.baseDamage},\nThis SMG Comes With The FireRate Of ${cordite.baseFirerate},\nThis SMG Comes With The Accuracy Of ${cordite.baseAccuracy}\n𝐏𝐫𝐞𝐭𝐭𝐲 𝐃𝐞𝐜𝐞𝐧𝐭 𝐒𝐌𝐆.`)
        .setImage('https://i.imgur.com/d98j2r9.jpeg')
    return message.channel.send({embeds: [corditee]});
}