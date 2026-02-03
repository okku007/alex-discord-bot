const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const rus = guns.find (gun => gun.name === "rus")
    const russian = new Discord.EmbedBuilder()
        .setTitle("RUS-79U Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${rus.baseDamage},\nThis SMG Comes With The FireRate Of ${rus.baseFirerate},\nThis SMG Comes With The Accuracy Of ${rus.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐒𝐌𝐆 𝐈𝐬 𝐎𝐆.`)
        .setImage('https://i.imgur.com/dDoBlZq.jpeg')
    return message.channel.send({embeds: [russian]});
}
