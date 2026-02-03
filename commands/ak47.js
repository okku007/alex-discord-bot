const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const ak47 = guns.find (gun => gun.name === "ak47")
    const ak = new Discord.EmbedBuilder()
        .setTitle("AK47 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With Base Damage Of ${ak47.baseDamage},\nFireRate Of This Gun Is ${ak47.baseFirerate},\nAnd The Accuracy Is ${ak47.baseAccuracy},\n𝐍𝐨𝐭 𝐆𝐨𝐧𝐧𝐚 𝐋𝐢𝐞 𝐀𝐤-𝟒𝟕 𝐈𝐬 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐆𝐮𝐧 𝐈𝐧 𝐄𝐯𝐞𝐫𝐲 𝐆𝐚𝐦𝐞.`)
        .setImage('https://i.imgur.com/RC0mVvr.jpeg')
    return message.channel.send({embeds: [ ak ]});
    }

