exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const helpEmbed = new Discord.EmbedBuilder()
        .setTitle("Commands That Are Available")
        .setColor(Discord.Colors.Random)
        .setDescription("𝗽𝗶𝗻𝗴: It's A Simple Command, \n 𝘁𝗶𝗲𝗿𝗹𝗶𝘀𝘁: The Most Recent Season's Tierlist Is Available Through This Command. \n 𝗵𝗲𝗹𝗽: A relatively straightforward command that will DM you with every one of Alex's available commands.  \n 𝗽𝗮𝗿𝘁𝗶𝗰𝘂𝗹𝗮𝗿 𝗴𝘂𝗻 𝘀𝘁𝗮𝘁𝘀: Use Prefix + Gun Name. (𝗲𝘅𝗮𝗺𝗽𝗹𝗲: prefix(.) + ak47) \n 𝗡𝗼𝘁𝗲:Use All Commands With Prefix And The Default Prefix Is: .")
        .setTimestamp()
    return message.author.send({embeds: [ helpEmbed]});

}
