const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const ppsh = guns.find (gun => gun.name === "ppsh")
    const ppsh41 = new Discord.EmbedBuilder()
        .setTitle("PPSH 41 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG comes with the damage of ${ppsh.baseDamage}, \n This SMG comes with the firerate of ${ppsh.baseFirerate}, \n This SMG comes with the accuracy of ${ppsh.baseAccuracy}`)
        .setImage('https://i.imgur.com/dvO0Fvs.jpeg')
    return message.channel.send({embeds: [ppsh41]});
}