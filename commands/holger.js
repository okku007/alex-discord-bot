const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const holger = guns.find (gun => gun.name === "holger")
    const holgeer = new Discord.EmbedBuilder()
        .setTitle("Holger Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This LMG Comes With The Damage Of ${holger.baseDamage},\nThis LMG Has FireRate Of ${holger.baseFirerate},\nThis LMG Has Accuracy Of ${holger.baseAccuracy}.\n𝐍𝐨𝐭 𝐀 𝐁𝐚𝐝 𝐋𝐌𝐆.`)
        .setImage('https://i.imgur.com/FLKWZFh.jpeg')
    return message.channel.send({embeds: [holgeer]});
}
