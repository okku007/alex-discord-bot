const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const hg = guns.find (gun => gun.name === "hg40")
    const hg40 = new Discord.EmbedBuilder()
        .setTitle("HG40 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${hg.baseDamage},\nThis SMG Has FireRate Of ${hg.baseFirerate},\nThis SMG Has Accuracy Of ${hg.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐈𝐬 𝐀 𝐒𝐌𝐆 𝐖𝐡𝐢𝐜𝐡 𝐈 𝐃𝐨𝐧𝐭 𝐊𝐧𝐨𝐰 𝐇𝐨𝐰 𝐈𝐭 𝐈𝐬.`)
        .setImage('https://i.imgur.com/buC3f5x.jpeg')
    return message.channel.send({embeds: [hg40]});
}

