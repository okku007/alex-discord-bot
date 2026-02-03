const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const fr = guns.find (gun => gun.name === "fr")
    const fr556 = new Discord.EmbedBuilder()
        .setTitle("FR-556 Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`This Gun Comes With The Damage of ${fr.baseDamage},\nIt Has FireRate Of ${fr.baseFirerate},\nAnd Accuracy Is ${fr.baseAccuracy}\n𝐍𝐨𝐭 𝐆𝐨𝐧𝐧𝐚 𝐋𝐢𝐞 𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐇𝐚𝐬 𝐀𝐜𝐜𝐮𝐫𝐚𝐜𝐲 𝐎𝐟 𝟖𝟔 𝐁𝐮𝐭 𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐒𝐡𝐚𝐤𝐞𝐬 𝐓𝐨𝐨 𝐌𝐮𝐜𝐡(𝐈𝐧 𝐌𝐲 𝐏𝐞𝐫𝐬𝐩𝐞𝐜𝐭𝐢𝐯𝐞)`)
        .setImage('https://i.imgur.com/mB4P7V9.jpeg')
    return message.channel.send({embeds: [fr556]});
}
