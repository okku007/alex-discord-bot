const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const na45 = guns.find (gun => gun.name === "na45")
    const na45Sniper = new Discord.EmbedBuilder()
        .setTitle("NA-45 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Sniper Comes With The Damage Of ${na45.baseDamage},\nThis Sniper Comes With The Firerate Of ${na45.baseFirerate},\nThis Sniper Comes With The Accuracy Of ${na45.baseAccuracy}.\n𝐄𝐱𝐩𝐥𝐨𝐬𝐢𝐯𝐞 𝐒𝐧𝐢𝐩𝐞𝐫 𝐑𝐢𝐟𝐥𝐞.`)
        .setImage('https://i.imgur.com/placeholder.jpeg')
    return message.channel.send({embeds: [na45Sniper]});
}

