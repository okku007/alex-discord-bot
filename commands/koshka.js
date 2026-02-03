const guns = require('../data/guns.json')
exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const koshkaGun = guns.find (gun => gun.name === "koshka")
    const koshka = new Discord.EmbedBuilder()
        .setTitle("Koshka Base Stats")
        .setColor(Discord.Colors.Random)
        .setImage('https://i.imgur.com/N2yxVYn.jpeg')
        .setDescription(`Koshka has base damage of ${koshkaGun.baseDamage}, \n Koshka has base Accuracy of ${koshkaGun.baseAccuracy}, \n Koshka has base Firerate of ${koshkaGun.baseFirerate}`)
    return message.channel.send({embeds: [koshka]})
}