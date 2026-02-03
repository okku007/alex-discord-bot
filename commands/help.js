const Discord = require('discord.js');

// Legacy prefix command
exports.run = (client, message, args) => {
    const helpEmbed = new Discord.EmbedBuilder()
        .setTitle("Alex Gun Dealer - Commands")
        .setColor(Discord.Colors.Gold)
        .setDescription("Your ultimate CODM weapon stats companion!")
        .addFields(
            { name: 'Weapon Commands', value: '`.gun <name>` - Get stats for any weapon\n`.gunlist [page]` - List all weapons' },
            { name: 'Rankings', value: '`.tierlist` - Current season tier rankings' },
            { name: 'Utility', value: '`.ping` - Check bot latency\n`.help` - This message' },
            { name: 'Slash Commands', value: 'Try `/gun`, `/gunlist`, `/tierlist`, `/help`!' }
        )
        .setFooter({ text: 'Made with ❤️ in India | Use . as prefix' })
        .setTimestamp();

    return message.author.send({ embeds: [helpEmbed] })
        .then(() => message.reply('Check your DMs!'))
        .catch(() => message.channel.send({ embeds: [helpEmbed] }));
};

// Slash command
exports.slashData = {
    name: 'help'
};

exports.execute = async (interaction) => {
    const helpEmbed = new Discord.EmbedBuilder()
        .setTitle("Alex Gun Dealer - Commands")
        .setColor(Discord.Colors.Gold)
        .setDescription("Your ultimate CODM weapon stats companion!")
        .addFields(
            { name: 'Weapon Commands', value: '`/gun <name>` - Get stats for any weapon\n`/gunlist [page]` - List all weapons' },
            { name: 'Rankings', value: '`/tierlist` - Current season tier rankings' },
            { name: 'Utility', value: '`/ping` - Check bot latency\n`/help` - This message' },
            { name: 'Legacy Commands', value: 'Prefix commands still work! Use `.` as prefix' }
        )
        .setFooter({ text: 'Made with ❤️ in India' })
        .setTimestamp();

    return interaction.reply({ embeds: [helpEmbed] });
};
