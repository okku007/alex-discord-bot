const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const cbr = guns.find (gun => gun.name === "cbr")
    const cbr4 = new Discord.EmbedBuilder()
        .setTitle("CBR4 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${cbr.baseDamage},\nThis SMG Comes With The Firerate Of ${cbr.baseFirerate},\nThis SMG Comes With The Accuracy Of ${cbr.baseAccuracy}`)
        .setImage('https://i.imgur.com/kG3ZumE.jpeg')
    return message.channel.send({embeds: [cbr4]});
}