const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const razor = guns.find(gun => gun.name === "razorback")
    const razorback = new Discord.EmbedBuilder()
        .setTitle("RazorBack Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${razor.baseDamage},\nThis SMG Comes With The FireRate Of ${razor.baseFirerate},\nThis SMG Comes With The Accuracy Of ${razor.baseAccuracy},\n𝐓𝐡𝐢𝐬 𝐒𝐌𝐆 𝐈𝐬 𝐆𝐨𝐨𝐝(𝐲𝐞𝐚𝐡 𝐢𝐭𝐬 𝐣𝐮𝐬𝐭 𝐠𝐨𝐨𝐝).`)
        .setImage('https://i.imgur.com/N0AkYlA.jpeg')
    return message.channel.send({embeds: [razorback]});
}