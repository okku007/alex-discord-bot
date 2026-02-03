const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const drh = guns.find(gun => gun.name === "drh")
    const doch = new Discord.EmbedBuilder()
        .setTitle("DR-H Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With The Damage Of ${drh.baseDamage},\n This Gun Comes With The Firerate Of ${drh.baseFirerate},\n This Gun Comes With The Accuracy Of ${drh.baseAccuracy}.`)
        .setImage('https://i.imgur.com/GUDmkGW.jpeg')
    return message.channel.send({embeds: [doch]});
}