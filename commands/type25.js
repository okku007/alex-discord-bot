const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const type25 = guns.find(gun => gun.name === "type25")
    const typee25 = new Discord.EmbedBuilder()
        .setTitle("Type25 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With The Base Damage Of ${type25.baseDamage},\nThis Gun Comes With The FireRate Of ${type25.baseFirerate},\nThis Gun Comes With Accuracy Of ${type25.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐇𝐚𝐬 𝐇𝐢𝐠𝐡 𝐅𝐢𝐫𝐞𝐑𝐚𝐭𝐞 𝐒𝐨 𝐈𝐭 𝐈𝐬 𝐆𝐨𝐨𝐝.`)
        .setImage('https://i.imgur.com/K8uLQJI.jpeg')
    return message.channel.send({embeds: [typee25]});
}
