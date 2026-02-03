const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const smrs = guns.find (gun => gun.name === "smrs")
    const smrss = new Discord.EmbedBuilder()
        .setTitle("SMRS Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Launcher Comes With The Damage Of ${smrs.baseDamage},\nThis Launcher Comes With The FireRate Of ${smrs.baseFirerate},\nThis Launcher Has Accuracy Of ${smrs.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐋𝐚𝐮𝐧𝐜𝐡𝐞𝐫 𝐈𝐬𝐧'𝐭 𝐅𝐨𝐫 𝐕𝐞𝐡𝐢𝐜𝐥𝐞𝐬 𝐁𝐮𝐭 𝐈𝐭 𝐈𝐬 𝐆𝐨𝐨𝐝 𝐓𝐨 𝐊𝐢𝐥𝐥 𝐏𝗹𝗮𝘆𝗲𝗿𝘀.`)
        .setImage('https://i.imgur.com/Tu5TchO.jpeg')
    return message.channel.send({embeds: [smrss]});
}
