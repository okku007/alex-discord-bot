const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const striker = guns.find (gun => gun.name === "striker")
    const strikeer = new Discord.EmbedBuilder()
        .setTitle("Striker Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${striker.baseDamage},\nThis Gun Has FireRate Of ${striker.baseFirerate},\nThis Gun Has Accuracy Of ${striker.baseAccuracy}.\nThis Is A Automatic Shotgun.`)
        .setImage('https://i.imgur.com/ACSu1kY.jpeg')
    return message.channel.send({embeds: [strikeer]});
}