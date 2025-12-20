const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const hades = guns.find (gun => gun.name === "hades")
    const haddes = new Discord.EmbedBuilder()
        .setTitle("Hades Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This LMG Has Base Damage Of ${hades.baseDamage},\nThis LMG Has FireRate Of ${hades.baseFirerate},\nThis LMG Has Accuracy Of ${hades.baseAccuracy}.\nDecent LMG.`)
        .setImage('https://i.imgur.com/B0EENQC.jpeg')
    return message.channel.send({embeds: [haddes]});
}