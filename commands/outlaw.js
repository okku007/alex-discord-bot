const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const outlaw = guns.find (gun => gun.name === "outlaw")
    const outlawSniper = new Discord.EmbedBuilder()
        .setTitle("Outlaw Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Comes With The Damage Of ${outlaw.baseDamage},\nThis Sniper Comes With The Firerate Of ${outlaw.baseFirerate},\nThis Sniper Comes With The Accuracy Of ${outlaw.baseAccuracy}.\n𝐀 𝐅𝐚𝐬𝐭-𝐅𝐢𝐫𝐢𝐧𝐠 𝐁𝐨𝐥𝐭-𝐀𝐜𝐭𝐢𝐨𝐧 𝐒𝐧𝐢𝐩𝐞𝐫.`)
        .setImage('https://i.imgur.com/placeholder.jpeg')
    return message.channel.send({embeds: [outlawSniper]});
}

