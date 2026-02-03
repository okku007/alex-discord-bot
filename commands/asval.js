const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const asvaal = guns.find (gun => gun.name === "asval")
    const asval = new Discord.EmbedBuilder()
        .setTitle("As-Val Base Stats")
        .setColor(Discord.Colors.Random)
        .setDescription(`As Val Come With The Damage Of ${asvaal.baseDamage},\nFireRate Is ${asvaal.baseFirerate}\nAnd Accuracy Is ${asvaal.baseAccuracy}\n𝐓𝐡𝐢𝐬 𝐆𝐮𝐧 𝐒𝐡𝐚𝐤𝐞𝐬 𝐓𝐨𝐨 𝐌𝐮𝐜𝐡 𝐒𝐨 𝐋𝐞𝐚𝐫𝐧 𝐇𝐨𝐰 𝐓𝐨 𝐂𝐨𝐧𝐭𝐫𝐨𝐥 𝐓𝐡𝐞 𝐑𝐞𝐜𝐨𝐢𝐥 𝐁𝐞𝐟𝐨𝐫𝐞 𝐔𝐬𝐢𝐧𝐠 𝐈𝐭`)
        .setImage('https://i.imgur.com/TlgW5qQ.jpeg')
    return message.channel.send({embeds:[asval]})
}
