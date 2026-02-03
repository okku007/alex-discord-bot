const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const icr = guns.find (gun => gun.name === "icr")
    const icr30 = new Discord.EmbedBuilder()
        .setTitle("ICR-30 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${icr.baseDamage},\nAnd It Comes With FireRate Of ${icr.baseFirerate},\nAnd The Accuracy is ${icr.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐈𝐬 𝐄𝐚𝐬𝐲 𝐓𝐨 𝐂𝐨𝐧𝐭𝐫𝐨𝐥 𝐒𝐨 𝐈𝐭 𝐈𝐬 𝐆𝐨𝐨𝐝 𝐅𝐨𝐫 𝐍𝐞𝐰 𝐏𝐥𝐚𝐲𝐞𝐫𝐬.`)
        .setImage('https://i.imgur.com/FlurHbB.jpeg')
    return message.channel.send({embeds: [icr30]});

}
