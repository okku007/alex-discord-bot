const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const ms = guns.find (gun => gun.name === "msmc")
    const msmc = new Discord.EmbedBuilder()
        .setTitle("MSMC Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This SMG Comes With The Damage Of ${ms.baseDamage},\nThis SMG Comes With The FireRate Of ${ms.baseFirerate},\nThis SMG Comes With The Accuracy Of ${ms.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐇𝐚𝐬 𝐂𝐫𝐚𝐳𝐲 𝐅𝐢𝐫𝐞𝐑𝐚𝐭𝐞.`)
        .setImage('https://i.imgur.com/4ulxIPi.jpeg')
    return message.channel.send({embeds: [msmc]});

}