const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const ak117 = guns.find (gun => gun.name === "ak117")
    const ak17 = new Discord.EmbedBuilder()
        .setTitle("AK117 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With The Damage Of ${ak117.baseDamage},\nThis Gun Comes With FireRate Of ${ak117.baseFirerate}.\nThis Gun Comes With Accuracy Of ${ak117.baseAccuracy},\n𝐏𝐫𝐞𝐭𝐭𝐲 𝐃𝐞𝐜𝐞𝐧𝐭 𝐆𝐮𝐧 𝐄𝐚𝐬𝐲 𝐓𝐨 𝐂𝐨𝐧𝐭𝐫𝐨𝐥 𝐑𝐞𝐜𝐨𝐢𝐥.`)
        .setImage('https://i.imgur.com/lSqE5sE.jpeg')
    return message.channel.send({embeds: [ ak17 ]});
}

