const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const m4lmg = guns.find (gun => gun.name === "m4lmg")
    const m4 = new Discord.EmbedBuilder()
        .setTitle("M4LMG Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This LMG Has Damage Of ${m4lmg.baseDamage},\nThis LMG Has FireRate Of ${m4lmg.baseFirerate},\nThis LMG Has Accuracy Of ${m4lmg.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐈𝐬 𝐌𝟒 𝐁𝐮𝐭 𝐖𝐢𝐭𝐡 𝐌𝐨𝐫𝐞 𝐑𝐨𝐮𝐧𝐝𝐬.`)
        .setImage('https://i.imgur.com/Kpkuchz.jpeg')
    return message.channel.send({embeds: [m4]});
}
