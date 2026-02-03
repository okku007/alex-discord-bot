const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const bow = guns.find (gun => gun.name === "crossbow")
    const crossbow = new Discord.EmbedBuilder()
        .setTitle("Crossbow Basic Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Weapon Comes With The Damage Of ${bow.baseDamage}\nThis Weapon Comes With The FireRate Of ${bow.baseFirerate}\nThis Weapon Come With The Accuracy Of ${bow.baseAccuracy}.\n𝐀 𝐁𝐚𝐬𝐢𝐜 𝐂𝐫𝐨𝐬𝐬𝐁𝐨𝐰.`)
        .setImage('https://i.imgur.com/J3Zh5tB.jpeg')
    return message.channel.send({embeds: [crossbow]});
}
