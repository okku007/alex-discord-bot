const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const s36 = guns.find(gun => gun.name === "s36")
    const s366 = new Discord.EmbedBuilder()
        .setTitle("S36 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This LMG Has Damage Of ${s36.baseDamage},\nThis LMG Has FireRate Of ${s36.baseFirerate},\nThis LMG Has Accuracy Of ${s36.baseAccuracy}.\n𝐔𝐬𝐞 𝐓𝐡𝐢𝐬 𝐋𝐌𝐆 𝐀𝐧𝐝 𝐒𝐢𝐭 𝐈𝐧 𝐂𝐨𝐫𝐧𝐞𝐫.`)
        .setImage('https://i.imgur.com/aOQMG1l.jpeg')
    return message.channel.send({embeds: [s366]});
}
