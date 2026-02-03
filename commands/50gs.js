const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const desert = guns.find (gun => gun.name === "50gs")
    const deserteagle = new Discord.EmbedBuilder()
        .setTitle("50gs Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Pistol Comes With The Damage Of ${desert.baseDamage},\nThis Pistol Has FireRate Of ${desert.baseFirerate},\nThis Pistol Comes With Accuracy Of ${desert.baseAccuracy},\n𝐓𝐡𝐢𝐬 𝐏𝐢𝐬𝐭𝐨𝐥 𝐈𝐬 𝐁𝐚𝐬𝐢𝐜𝐚𝐥𝐥𝐲 𝐀 𝐇𝐚𝐧𝐝𝐆𝐮𝐧.`)
        .setImage('https://i.imgur.com/cunSAsI.jpeg')
    return message.channel.send({embeds: [ deserteagle ]});


}
