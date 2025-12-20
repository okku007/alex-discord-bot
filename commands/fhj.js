const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fhj = guns.find (gun => gun.name === "fhj")
    const fhj18 = new Discord.EmbedBuilder()
        .setTitle("FHJ-18 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Launcher Comes With The Damage Of ${fhj.baseDamage},\nThis Launcher Has FireRate Of ${fhj.baseFirerate}.\nThis Launcher Has Accuracy Of ${fhj.baseAccuracy},\n𝐓𝐡𝐢𝐬 𝐋𝐚𝐮𝐧𝐜𝐡𝐞𝐫 𝐇𝐚𝐬 𝐋𝐨𝐜𝐤 𝐎𝐧 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 𝐒𝐨 𝐘𝐨𝐮 𝐂𝐚𝐧 𝐋𝐨𝐜𝐤 𝐈𝐭 𝐎𝐧𝐭𝐨 𝐕𝐞𝐡𝐢𝐜𝐥𝐞𝐬 𝐀𝐧𝐝 𝐇𝐞𝐥𝐢𝐜𝐨𝐩𝐭𝐞𝐫𝐬.`)
        .setImage('https://i.imgur.com/GT0Wc4S.jpeg')
    return message.channel.send({embeds: [fhj18]});
}
