const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const dl = guns.find (gun => gun.name === "dlq33")
    const dlq33 = new Discord.EmbedBuilder()
        .setTitle("DLQ33 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Comes With The Damage Of ${dl.baseDamage},\n This Sniper Comes With The Firerate Of ${dl.baseFirerate},\n This Sniper Comes With The Accuracy Of ${dl.baseAccuracy}.\n 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔 𝗢𝗚 𝗦𝗻𝗶𝗽𝗲𝗿.`)
        .setImage('https://i.imgur.com/aa1iCPC.jpeg')
    return message.channel.send({embeds: [dlq33]});
}

