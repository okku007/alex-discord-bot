const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const rpd = guns.find (gun => gun.name === "rpd")
    const rppd = new Discord.EmbedBuilder()
        .setTitle("RPD Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This LMG Has Damage Of ${rpd.baseDamage},\nThis LMG Has FireRate Of ${rpd.baseFirerate},\nThis LMG Has Accuracy Of ${rpd.baseAccuracy}.\n𝐔𝐬𝐞 𝟐𝟎𝟎 𝐑𝐨𝐮𝐧𝐝 𝐁𝐞𝐥𝐭 𝐀𝐧𝐝 𝐒𝐩𝐚𝐦 𝐈𝐭.`)
        .setImage('https://i.imgur.com/SaYCR3w.jpeg')
    return message.channel.send({embeds: [rppd]});
}
