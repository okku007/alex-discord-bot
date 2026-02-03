const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const echo = guns.find (gun => gun.name === "echo")
    const echoo = new Discord.EmbedBuilder()
        .setTitle("Echo Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${echo.baseDamage},\nThis Gun Has FireRate Of ${echo.baseFirerate},\nThis Gun Has Accuracy Of ${echo.baseAccuracy}.\nThis Is Also A Automatic ShotGun.`)
        .setImage('https://i.imgur.com/VCQRw9k.jpeg')
    return message.channel.send({embeds: [echoo]});
}