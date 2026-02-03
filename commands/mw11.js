const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const mw = guns.find(gun => gun.name === "mw11")
    const mw11 = new Discord.EmbedBuilder()
        .setTitle("MW11 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Pistol Comes With The Damage Of ${mw.baseDamage},\nThis Gun Has FireRate Of ${mw.baseFirerate}\nThis Gun Comes With Accuracy Of ${mw.baseAccuracy}\n𝐓𝐡𝐢𝐬 𝐈𝐬 𝐀 𝐁𝐚𝐬𝐢𝐜 𝐏𝐢𝐬𝐭𝐨𝐥 𝐍𝐨𝐭 𝐓𝐡𝐚𝐭 𝐆𝐨𝐨𝐝.`)
        .setImage('https://i.imgur.com/GG1eDuQ.jpeg')
    return message.channel.send({embeds: [mw11]});
}
