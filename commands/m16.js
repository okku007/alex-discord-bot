const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const m16 = guns.find (gun => gun.name === "m16")
    const m16a4 = new Discord.EmbedBuilder()
        .setTitle("M16 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With Damage Of ${m16.baseDamage},\n FireRate Of This Gun Is ${m16.baseFirerate},\nAnd The Accuracy Of This Gun Is ${m16.baseAccuracy}(Pretty High Accuracy).\n𝐈 𝐃𝐨𝐧𝐭 𝐋𝐢𝐤𝐞 𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐁𝐞𝐜𝐚𝐮𝐬𝐞 𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐇𝐚𝐬 𝐁𝐮𝐫𝐬𝐭 𝐅𝐢𝐫𝐞 𝐌𝐨𝐝𝐞 𝐒𝐨 𝐍𝐨𝐭 𝐀 𝐓𝐲𝐩𝐞 𝐎𝐟 𝐆𝐮𝐧 𝐓𝐡𝐚𝐭 𝐈 𝐋𝐢𝐤𝐞.`)
        .setImage('https://i.imgur.com/FJ3W6wZ.jpeg')
    return message.channel.send({embeds: [m16a4]});
}
