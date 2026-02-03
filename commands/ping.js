const Discord = require('discord.js');

// Legacy prefix command
exports.run = (client, message, args) => {
    const latency = Date.now() - message.createdTimestamp;
    const apiLatency = Math.round(client.ws.ping);

    const embed = new Discord.EmbedBuilder()
        .setTitle('Pong!')
        .setColor(Discord.Colors.Green)
        .addFields(
            { name: 'Bot Latency', value: `${latency}ms`, inline: true },
            { name: 'API Latency', value: `${apiLatency}ms`, inline: true }
        )
        .setTimestamp();

    return message.channel.send({ embeds: [embed] });
};

// Slash command
exports.slashData = {
    name: 'ping'
};

exports.execute = async (interaction) => {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    const latency = sent.createdTimestamp - interaction.createdTimestamp;
    const apiLatency = Math.round(interaction.client.ws.ping);

    const embed = new Discord.EmbedBuilder()
        .setTitle('Pong!')
        .setColor(Discord.Colors.Green)
        .addFields(
            { name: 'Bot Latency', value: `${latency}ms`, inline: true },
            { name: 'API Latency', value: `${apiLatency}ms`, inline: true }
        )
        .setTimestamp();

    return interaction.editReply({ content: null, embeds: [embed] });
};
