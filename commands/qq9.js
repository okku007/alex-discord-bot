const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const qq = guns.find(gun => gun.name === "qq9")
    const qq9 = new Discord.EmbedBuilder()
        .setTitle("QQ9 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${qq.baseDamage},\nThis SMG Comes With The FireRate Of ${qq.baseFirerate}\nThis SMG Comes With The Accuracy Of ${qq.baseAccuracy}.\n𝐌𝐲 𝐅𝐚𝐯𝐨𝐮𝐫𝐢𝐭𝐞 𝐒𝐌𝐆 𝐄𝐯𝐞𝐫. 𝐏𝐫𝐞𝐭𝐭𝐲 𝐃𝐞𝐜𝐞𝐧𝐭.`)
        .setImage('https://i.imgur.com/jc29Gcd.jpeg')
    return message.channel.send({embeds: [qq9]});
}