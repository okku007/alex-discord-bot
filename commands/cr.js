const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const cr56 = guns.find (gun => gun.name === "cr56")
    const amax = new Discord.EmbedBuilder()
        .setTitle("CR56 AMAX Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Has Base Damage Of ${cr56.baseDamage},\n This Gun Has Base FireRate Of ${cr56.baseFirerate},\n This Gun Has Base Accuracy Of ${cr56.baseAccuracy},\n 𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐍𝐞𝐞𝐝𝐬 𝐒𝐤𝐢𝐥𝐥 𝐓𝐨 𝐂𝐨𝐧𝐭𝐫𝐨𝐥 𝐓𝐡𝐞 𝐑𝐞𝐜𝐨𝐢𝐥`)
        .setImage('https://i.imgur.com/PLsFNtz.jpeg')
    return message.channel.send({embeds: [amax]});
}
