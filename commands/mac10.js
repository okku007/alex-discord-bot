const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const mac = guns.find (gun => gun.name === "mac10")
    const mac10 = new Discord.EmbedBuilder()
        .setTitle("MAC-10 Base Stats")
        .setColor(Discord.Colors.Random)
        .setImage('https://i.imgur.com/yN1H7WP.jpeg')
        .setDescription(`MAC-10 has base damage of ${mac.baseDamage} \n MAC-10 has base Firerate of ${mac.baseFirerate} \n MAC-10 has base Accuracy of ${mac.baseAccuracy}.`)
    return message.channel.send({embeds: [mac10]})
}