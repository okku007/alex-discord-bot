const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const qxr = guns.find (gun => gun.name === "qxr")
    const qxxr = new Discord.EmbedBuilder()
        .setTitle("QXR Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${qxr.baseDamage},\nThis SMG Has FireRate Of ${qxr.baseFirerate},\nThis SMG Has Accuracy Of ${qxr.baseAccuracy}\n𝐓𝐡𝐢𝐬 𝐒𝐌𝐆 𝐈𝐬 𝐀𝐬 𝐆𝐨𝐨𝐝 𝐀𝐬 𝐐𝐐𝟗.`)
        .setImage('https://i.imgur.com/k8jy1yz.jpeg')
    return message.channel.send({embeds: [qxxr]});
}