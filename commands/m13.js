const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const m13 = guns.find (gun => gun.name === "m13")
    const m133 = new Discord.EmbedBuilder()
        .setTitle("M13 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`M13 Has ${m13.baseDamage} Base Damage,\nAnd FireRate Of ${m13.baseFirerate},\nAnd Accuracy Of ${m13.baseAccuracy},\n 𝐈𝐟 𝐘𝐨𝐮 𝐇𝐚𝐯𝐞 𝐏𝐥𝐚𝐲𝐞𝐝 𝐂𝐎𝐃:𝐖𝐀𝐑𝐙𝐎𝐍𝐄 𝐘𝐨𝐮 𝐖𝐢𝐥𝐥 𝐊𝐧𝐨𝐰 𝐇𝐨𝐰 𝐆𝐨𝐨𝐝 𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐈𝐬.`)
        .setImage('https://i.imgur.com/VTBoDG8.jpeg')
    return message.channel.send({embeds: [m133]});
}
