const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const kn = guns.find (gun => gun.name === "kn")
    const kn44 = new Discord.EmbedBuilder()
        .setTitle("KN-44 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With Damage Of ${kn.baseDamage},\nFireRate is ${kn.baseFirerate},\nAccuracy Is ${kn.baseAccuracy},\n𝐍𝐨𝐭 𝐆𝐨𝐧𝐧𝐚 𝐋𝐢𝐞 𝐈 𝐏𝐥𝐚𝐲𝐞𝐝 𝐓𝐡𝐢𝐬 𝐆𝐚𝐦𝐞 𝐅𝐫𝐨𝐦 𝐃𝐚𝐲 𝟏, 𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐈𝐬 𝐀𝐰𝐞𝐬𝐨𝐦𝐞 𝐈𝐭 𝐇𝐚𝐬 𝐀𝐧𝐨𝐭𝐡𝐞𝐫 𝐅𝐞𝐞𝐥𝐢𝐧𝐠 𝐖𝐡𝐞𝐧 𝐘𝐨𝐮 𝐅𝐢𝐫𝐞 𝐈𝐭.`)
        .setImage('https://i.imgur.com/s46ygmF.jpeg')
    return message.channel.send({embeds: [kn44]});
}
