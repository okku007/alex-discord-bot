const guns = require('../data/guns.json');
const Discord = require('discord.js');

// Helper function to create the gun list embed
function createGunListEmbed(page) {
    const pageSize = 15;
    const totalPages = Math.ceil(guns.length / pageSize);

    if (page < 1 || page > totalPages) {
        return { error: `Invalid page. Please use a page number between 1 and ${totalPages}.` };
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const pageGuns = guns.slice(start, end);

    const gunList = pageGuns.map(g => {
        const tier = g.tier ? `[${g.tier}]` : '';
        const category = g.category ? `(${g.category})` : '';
        return `• **${g.displayName || g.name}** ${tier} ${category}`;
    }).join('\n');

    return new Discord.EmbedBuilder()
        .setTitle('Available Weapons')
        .setColor(Discord.Colors.Gold)
        .setDescription(gunList)
        .setFooter({ text: `Page ${page}/${totalPages} | Total: ${guns.length} guns | Use .gun <name> or /gun for stats` })
        .setTimestamp();
}

// Legacy prefix command
exports.run = (client, message, args) => {
    const page = parseInt(args[0]) || 1;
    const result = createGunListEmbed(page);

    if (result.error) {
        return message.reply(result.error);
    }

    return message.channel.send({ embeds: [result] });
};

// Slash command
exports.slashData = {
    name: 'gunlist'
};

exports.execute = async (interaction) => {
    const page = interaction.options.getInteger('page') || 1;
    const result = createGunListEmbed(page);

    if (result.error) {
        return interaction.reply({ content: result.error, ephemeral: true });
    }

    return interaction.reply({ embeds: [result] });
};

