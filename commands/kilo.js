const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const kilo = guns.find (gun => gun.name === "kilo")
    const kilobolt = new Discord.EmbedBuilder()
        .setTitle("Kilo Bolt Action Base Stats")
        .setColor(Discord.Colors.Random)
        .setImage('https://i.imgur.com/SxPBWte.jpeg')
        .setDescription(`This Marksman Rifle Comes With The Damage Of ${kilo.baseDamage},\nThis Marksman Rifle Comes With The FireRate Of ${kilo.baseFirerate},\nThis Marksman Rifle Comes With The Accuracy Of ${kilo.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐈𝐬 𝐊𝐚𝐫𝟗𝟖𝐊 𝐅𝐫𝐨𝐦 𝐖𝐨𝐫𝐥𝐝 𝐖𝐚𝐫 𝟐.`)

    return message.channel.send({embeds: [kilobolt]});
}