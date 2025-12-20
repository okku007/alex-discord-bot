const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fennec = guns.find (gun => gun.name === "fennec")
    const fenec = new Discord.EmbedBuilder()
        .setTitle("Fennec Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${fennec.baseDamage},\nThis SMG Has Firerate Of ${fennec.baseFirerate},\nThis SMG Comes With The Accuracy Of ${fennec.baseAccuracy}.\n𝐔𝐬𝐞 𝐓𝐡𝐢𝐬 𝐒𝐌𝐆 𝐈𝐧 𝐂𝐥𝐨𝐬𝐞 𝐑𝐚𝐧𝐠𝐞.`)
        .setImage('https://i.imgur.com/Zg15jOM.jpeg')
    return message.channel.send({embeds: [fenec]});
}