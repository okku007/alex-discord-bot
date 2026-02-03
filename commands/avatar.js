exports.run = (client, message, args) => {
 const Discord = require('discord.js')
 const avatarEmbed = new Discord.EmbedBuilder()

 if (!message.mentions.users.size) {
  avatarEmbed.setTitle('Your avatar')
  avatarEmbed.setURL(message.author.avatarURL())
  avatarEmbed.setImage(message.author.avatarURL({extension: 'png', size: 4096}))
  avatarEmbed.setTimestamp()
  return message.channel.send({embeds:[ avatarEmbed ]});
 }

 message.mentions.users.map(user => {
  avatarEmbed.setTitle(`${user.username}'s Avatar`)
  avatarEmbed.setURL(user.avatarURL())
  avatarEmbed.setImage(user.avatarURL({extension: 'png', size: 4096}))
  avatarEmbed.setTimestamp()
  return message.channel.send({embeds:[ avatarEmbed ]});
 })
}
