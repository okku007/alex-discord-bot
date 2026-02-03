const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const hvk = guns.find (gun => gun.name === "hvk")
    const hvk30 = new Discord.EmbedBuilder()
        .setTitle("HVK-30 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With ${hvk.baseDamage} Of Base Damage,\n FireRate Is ${hvk.baseFirerate},\nAnd Accuracy Of ${hvk.baseAccuracy},\n𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐈𝐬 𝐍𝐨𝐭 𝐀𝐰𝐞𝐬𝐨𝐦𝐞 𝐍𝐨𝐭 𝐁𝐚𝐝, 𝐈𝐭 𝐈𝐬 𝐁𝐚𝐥𝐚𝐧𝐜𝐞𝐝.`)
        .setImage('https://i.imgur.com/34Xsmxl.jpeg')
    return message.channel.send({embeds: [hvk30]});
}

