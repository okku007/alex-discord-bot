const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const rytec = guns.find (gun => gun.name === "rytecamr")
    const rytecAmr = new Discord.EmbedBuilder()
        .setTitle("Rytec AMR Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Comes With The Damage Of ${rytec.baseDamage},\nThis Sniper Comes With The Firerate Of ${rytec.baseFirerate},\nThis Sniper Comes With The Accuracy Of ${rytec.baseAccuracy}.\n𝐀 𝐏𝐨𝐰𝐞𝐫𝐟𝐮𝐥 𝐀𝐧𝐭𝐢-𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥 𝐑𝐢𝐟𝐥𝐞.`)
        .setImage('https://i.imgur.com/placeholder.jpeg')
    return message.channel.send({embeds: [rytecAmr]});
}

