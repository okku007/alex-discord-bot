const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const chicom = guns.find (gun => gun.name === "chicom")
    const chiicom = new Discord.EmbedBuilder()
        .setTitle("Chicom Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${chicom.baseDamage},\nThis SMG Comes With The FireRate Of ${chicom.baseFirerate},\nThis SMG Comes With The Accuracy Of ${chicom.baseAccuracy}.\n𝐏𝐫𝐞𝐭𝐭𝐲 𝐃𝐞𝐜𝐞𝐧𝐭 𝐒𝐌𝐆.`)
        .setImage('https://i.imgur.com/8x51Ycu.jpeg')
    return message.channel.send({embeds: [chiicom]});
}