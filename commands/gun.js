const guns = require('../data/guns.json');
const Discord = require('discord.js');

// Helper function to create the gun embed
function createGunEmbed(gun) {
    const categoryEmojis = {
        'Assault Rifle': '🔫',
        'SMG': '💨',
        'Sniper': '🎯',
        'LMG': '💥',
        'Shotgun': '💣',
        'Marksman': '🏹',
        'Pistol': '🔫',
        'Launcher': '🚀'
    };

    const tierColors = {
        'SS': Discord.Colors.Gold,
        'S': Discord.Colors.Orange,
        'A': Discord.Colors.Green,
        'B': Discord.Colors.Blue,
        'C': Discord.Colors.Grey,
        'D': Discord.Colors.DarkGrey
    };

    const emoji = categoryEmojis[gun.category] || '🔫';
    const color = tierColors[gun.tier] || Discord.Colors.Default;

    const embed = new Discord.EmbedBuilder()
        .setTitle(`${emoji} ${gun.displayName || gun.name.toUpperCase()} Base Stats`)
        .setColor(color)
        .addFields(
            { name: '📊 Damage', value: gun.baseDamage, inline: true },
            { name: '⚡ Fire Rate', value: gun.baseFirerate, inline: true },
            { name: '🎯 Accuracy', value: gun.baseAccuracy, inline: true }
        );

    if (gun.category) {
        embed.addFields({ name: '📁 Category', value: gun.category, inline: true });
    }
    if (gun.tier) {
        embed.addFields({ name: '🏆 Tier', value: gun.tier, inline: true });
    }
    if (gun.description) {
        embed.setDescription(gun.description);
    }

    embed.setFooter({ text: 'Alex Gun Dealer | CODM Weapon Stats' })
        .setTimestamp();

    return embed;
}

// Legacy prefix command
exports.run = (client, message, args) => {
    const gunName = args[0]?.toLowerCase();

    if (!gunName) {
        return message.reply('Please specify a gun name. Example: `.gun ak47`\nUse `.gunlist` to see all available guns.');
    }

    const gun = guns.find(g => g.name === gunName);

    if (!gun) {
        const partialMatch = guns.filter(g => g.name.includes(gunName));
        if (partialMatch.length > 0) {
            const suggestions = partialMatch.slice(0, 5).map(g => g.name).join(', ');
            return message.reply(`Gun "${gunName}" not found. Did you mean: ${suggestions}?`);
        }
        return message.reply(`Gun "${gunName}" not found. Use \`.gunlist\` for available guns.`);
    }

    return message.channel.send({ embeds: [createGunEmbed(gun)] });
};

// Slash command
exports.slashData = {
    name: 'gun'
};

exports.execute = async (interaction) => {
    const gunName = interaction.options.getString('name').toLowerCase();
    const gun = guns.find(g => g.name === gunName);

    if (!gun) {
        return interaction.reply({ content: `Gun "${gunName}" not found.`, ephemeral: true });
    }

    return interaction.reply({ embeds: [createGunEmbed(gun)] });
};

