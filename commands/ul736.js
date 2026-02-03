const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const ul = guns.find (gun => gun.name === "ul736")
    const ul736 = new Discord.EmbedBuilder()
        .setTitle("UL-736 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This LMG Has Damage Of ${ul.baseDamage},\nThis LMG Has FireRate Of ${ul.baseFirerate},\nThis LMG Has Accuracy Of ${ul.baseAccuracy}.`)
        .setImage('https://i.imgur.com/mTNYPd7.jpeg')
    return message.channel.send({embeds: [ul736]});
}

