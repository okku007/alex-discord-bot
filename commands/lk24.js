const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const lk = guns.find (gun => gun.name === "lk")
    const lk24 = new Discord.EmbedBuilder()
        .setTitle("LK-24 Base Stats")
        .setColor(Discord.Colors.Random)
        .setImage('https://i.imgur.com/rR68Aud.jpeg')
        .setDescription(`This Gun Come With The Damage Of ${lk.baseDamage},\nThis Gun Has FireRate Of ${lk.baseFirerate},\nThis Gun Has Accuracy Of ${lk.baseAccuracy}.\n𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐃𝐨𝐞𝐬𝐧'𝐭 𝐒𝐡𝐚𝐤𝐞 𝐀𝐭 𝐀𝐥𝐥.`)
    return message.channel.send({embeds: [lk24]});
}
