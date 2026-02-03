const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const asm = guns.find (gun => gun.name === "asm10")
    const asm10 = new Discord.EmbedBuilder()
        .setTitle("ASM10 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Damage Of ${asm.baseDamage},\nFireRate Of This Gun Is ${asm.baseFirerate},\nThis Gun Has Accuracy Of ${asm.baseAccuracy}.\n𝐏𝐫𝐞𝐭𝐭𝐲 𝐃𝐞𝐜𝐞𝐧𝐭 𝐆𝐮𝐧 𝐍𝐢𝐜𝐞 𝐀𝐜𝐜𝐮𝐫𝐚𝐜𝐲 𝐀𝐧𝐝 𝐍𝐢𝐜𝐞 𝐃𝐚𝐦𝐚𝐠𝐞.`)
        .setImage('https://i.imgur.com/5XLIOyb.jpeg')
    return message.channel.send({embeds: [ asm10 ]});
}
