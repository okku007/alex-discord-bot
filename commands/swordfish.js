const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const sword = guns.find (gun => gun.name === "swordfish")
    const swordfish = new Discord.EmbedBuilder()
        .setTitle("Swordfish Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With The Damage Of ${sword.baseDamage},\n This Gun Comes With The Firerate Of ${sword.baseFirerate},\n This Gun Comes With The Accuracy Of ${sword.baseAccuracy}`)
        .setImage('https://i.imgur.com/b0JwWb3.jpeg')
    return message.channel.send({embeds: [swordfish]});
}