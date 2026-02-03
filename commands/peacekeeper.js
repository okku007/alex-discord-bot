const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const peace = guns.find (gun => gun.name === "peacekeeper")
    const peacekeeper = new Discord.EmbedBuilder()
        .setTitle("PeaceKeeper Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`PeaceKeeper Has Base Damage Of ${peace.baseDamage},\nIt Has FireRate Of ${peace.baseFirerate},\nAnd The Accuracy Is ${peace.baseAccuracy}\n𝐀 𝐃𝐞𝐜𝐞𝐧𝐭 𝐆𝐮𝐧 𝐖𝐢𝐭𝐡 𝐃𝐞𝐜𝐞𝐧𝐭 𝐅𝐢𝐫𝐞𝐑𝐚𝐭𝐞 𝐀𝐧𝐝 𝐀𝐜𝐜𝐮𝐫𝐚𝐜𝐲 𝐍𝐨𝐭 𝐀 𝐁𝐚𝐝 𝐆𝐮𝐧.`)
        .setImage('https://i.imgur.com/aDAVJIX.jpeg')
    return message.channel.send({embeds: [peacekeeper]});
}
