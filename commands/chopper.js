const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const chopper = guns.find (gun => gun.name === "chopper")
    const choper = new Discord.EmbedBuilder()
        .setTitle("Chopper Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This LMG Comes With The Base Damage Of ${chopper.baseDamage},\nThis LMG Has FireRate Of ${chopper.baseFirerate},\nThis LMG Has Accuracy Of ${chopper.baseAccuracy}.\n𝐉𝐮𝐬𝐭 𝐒𝐩𝐚𝐦 𝐓𝐡𝐢𝐬 𝐋𝐌𝐆.`)
        .setImage('https://i.imgur.com/F6y1Mt2.jpeg')
    return message.channel.send({embeds: [choper]});
}
