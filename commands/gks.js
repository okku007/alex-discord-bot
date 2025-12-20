const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const gks = guns.find (gun => gun.name === "gks")
    const gkks = new Discord.EmbedBuilder()
        .setTitle("GKS Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${gks.baseDamage},\nThis SMG Comes With The FireRate Of ${gks.baseFirerate},\nThis SMG Comes With The Accuracy Of ${gks.baseAccuracy}.\n𝐏𝐫𝐞𝐭𝐭𝐲 𝐃𝐞𝐜𝐞𝐧𝐭 𝐆𝐮𝐧.`)
        .setImage('https://i.imgur.com/B6TGnJY.jpeg')
    return message.channel.send({embeds: [gkks]});
}