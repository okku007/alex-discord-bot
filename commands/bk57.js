const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const bk = guns.find (gun => gun.name === "bk57")
    const bk57 = new Discord.EmbedBuilder()
        .setTitle("BK57 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has ${bk.baseDamage} Damage,\nThis Gun Has FireRate Of ${bk.baseFirerate},\nThis Gun Has Accuracy Of ${bk.baseAccuracy}\n𝐄𝐚𝐬𝐲 𝐓𝐨 𝐂𝐨𝐧𝐭𝐫𝐨𝐥 𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐓𝐡𝐚𝐭'𝐬 𝐖𝐡𝐚𝐭 𝐈 𝐒𝐚𝐲.`)
        .setImage('https://i.imgur.com/8LIrwOO.jpeg')
    return message.channel.send({embeds: [bk57]});
}
