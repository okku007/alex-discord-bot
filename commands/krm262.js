const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const krm = guns.find (gun => gun.name === "krm")
    const krm252 = new Discord.EmbedBuilder()
        .setTitle("KRM Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${krm.baseDamage},\nThis Gun Has FireRate Of ${krm.baseFirerate},\nThis Gun Has Accuracy Of ${krm.baseAccuracy}.\nOne Of The Best Semi Automatic ShotGun In The Entire Game.`)
        .setImage('https://i.imgur.com/M0IfRvl.jpeg')
    return message.channel.send({embeds: [krm252]});
}