const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const pp = guns.find (gun => gun.name === "pp19")
    const pp19 = new Discord.EmbedBuilder()
        .setTitle("PP19-Bizon Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${pp.baseDamage},\nThis SMG Comes With The FireRate Of ${pp.baseFirerate},\nThis SMG Comes With The Accuracy Of ${pp.baseAccuracy}\n𝐔𝐬𝐞 𝐄𝐱𝐭𝐞𝐧𝐝𝐞𝐝 𝐌𝐚𝐠 𝐈𝐧 𝐓𝐡𝐢𝐬.`)
        .setImage('https://i.imgur.com/zZDO5G7.jpeg')
    return message.channel.send({embeds: [pp19]});
}