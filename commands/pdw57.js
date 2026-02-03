const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const pdw = guns.find(gun => gun.name === "pdw")
    const pdw57 = new Discord.EmbedBuilder()
        .setTitle("PDW-57 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${pdw.baseDamage},\nThis SMG Comes With The FireRate Of ${pdw.baseFirerate},\nThis Gun Comes With Accuracy Of ${pdw.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐈𝐬 𝐀𝐥𝐬𝐨 𝐀 𝐎𝐆 𝐒𝐌𝐆.`)
        .setImage('https://i.imgur.com/iOb4kh9.jpeg')
    return message.channel.send({embeds: [pdw57]})
}

