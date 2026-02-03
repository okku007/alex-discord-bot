const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const agr = guns.find (gun => gun.name === "agr")
    const agr556 = new Discord.EmbedBuilder()
        .setTitle("AGR Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${agr.baseDamage},\nThis SMG Comes With The FireRate Of ${agr.baseFirerate},\nThis SMG Comes With The Accuracy ${agr.baseAccuracy},\n𝐓𝐡𝐢𝐬 𝐒𝐌𝐆 𝐈𝐬 𝐀𝐑.`)
        .setImage('https://i.imgur.com/FCr5kQO.jpeg')
    return message.channel.send({embeds: [ agr556]});

}