const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const mk = guns.find (gun => gun.name === "mk2")
    const mk2 = new Discord.EmbedBuilder()
        .setTitle("MK2 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Marksman Rifle Comes With The Damage Of ${mk.baseDamage}\nThis Marksman Rifle Comes With The FireRate Of ${mk.baseFirerate},\nThis Marksman Rifle Comes With The Accuracy of ${mk.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐌𝐚𝐫𝐤𝐬𝐦𝐚𝐧 𝐑𝐢𝐟𝐥𝐞 𝐈𝐬 𝐒𝐢𝐦𝐢𝐥𝐚𝐫 𝐓𝐨 𝐖𝐢𝐧𝐜𝐡𝐞𝐬𝐭𝐞𝐫.`)
        .setImage('https://i.imgur.com/mHnHU42.jpeg')
    return message.channel.send({embeds: [mk2]})
}