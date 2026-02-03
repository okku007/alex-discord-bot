const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const j3 = guns.find (gun => gun.name === "j358")
    const j358 = new Discord.EmbedBuilder()
        .setTitle("J358 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Pistol Comes With The Damage Of ${j3.baseDamage},\nThis Pistol Comes With The FireRate Of ${j3.baseFirerate},\nThis Pistol Comes With The Accuracy Of ${j3.baseAccuracy}.\n𝐀 𝐁𝐚𝐬𝐢𝐜 𝐑𝐞𝐯𝐨𝐥𝐯𝐞𝐫`)
        .setImage('https://i.imgur.com/x4U8B0L.jpg?1')
    return message.channel.send({embeds: [j358]});
}
