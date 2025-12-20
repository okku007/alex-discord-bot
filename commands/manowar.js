const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const man = guns.find (gun => gun.name === "manowar")
    const manowar = new Discord.EmbedBuilder()
        .setTitle("Man-O-War Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With The Base Damage Of ${man.baseDamage},\nThe Fire Rate Is ${man.baseFirerate},\n And Accuracy Is ${man.baseAccuracy}\n𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐆𝐨𝐭 𝐌𝐚𝐣𝐨𝐫 𝐁𝐮𝐟𝐟𝐬 𝐈𝐧 𝐏𝐚𝐬𝐭 𝐒𝐨𝐦𝐞 𝐒𝐞𝐚𝐬𝐨𝐧𝐬 𝐒𝐨 𝐈𝐭 𝐈𝐬 𝐁𝐫𝐨𝐤𝐞𝐧.`)
        .setImage('https://i.imgur.com/56SRBIp.png')
    return message.channel.send({embeds: [manowar]});
}

