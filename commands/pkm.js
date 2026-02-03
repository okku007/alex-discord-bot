const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const pkm = guns.find (gun => gun.name === "pkm")
    const pkmlmg = new Discord.EmbedBuilder()
        .setTitle("PKM Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This LMG comes with the damage of ${pkm.baseDamage}, \n This LMG comes with the firerate of ${pkm.baseFirerate} \n This LMG comes with the accuracy of ${pkm.baseAccuracy}`)
        .setImage('https://i.imgur.com/PBRRtFC.jpeg')
    return message.channel.send({embeds: [pkmlmg]});
}