const Discord = require('discord.js');

// Legacy prefix command
exports.run = (client, message, args) => {
    const tierlist = new Discord.EmbedBuilder()
        .setTitle("🏆 Current Season TierList")
        .setColor(Discord.Colors.Gold)
        .setDescription("**Use `.gun <name>` or `/gun` to see detailed stats for any weapon!**")
        .addFields(
            { name: '🔥 Tier SS', value: 'MAC 10, CBR4, Kilo 141, M13, PPSh-41, Holger 26, Type 25, DL Q33, SVD, SKS, PKM, RPD, KRM-262' },
            { name: '⭐ Tier S', value: 'Fennec, Peacekeeper MK2, AS VAL, HVK-30, PP19 Bizon, QQ9, RUS-79U, ICR-1, AK117, Locus, ASM10, QXR, R9-0, JAK-12' },
            { name: '✅ Tier A', value: 'LK24, Razorback, HBRa3, DR-H, SP-R 208, CR-56 AMAX, BK57, Man-O-War, Swordfish, M4, Arctic.50, FR.556, KN-44, AK-47, M4LMG, Outlaw, Chopper, MX9, Cordite, Rytec AMR, HS0405' },
            { name: '🔵 Tier B', value: 'MSMC, GKS, Pharo, AGR 556, HG 40, MK2, BY15, Kilo Bolt-Action, XPR-50, Hades' },
            { name: '⚪ Tier C', value: 'Chicom, M16, PDW-57, S36, UL736, Echo' },
            { name: '❌ Tier D', value: 'M21 EBR, NA-45, Striker, HS2126' }
        )
        .setFooter({ text: 'Alex Gun Dealer | CODM Weapon Tier Rankings' })
        .setTimestamp();

    return message.reply({ embeds: [tierlist] });
};

// Slash command
exports.slashData = {
    name: 'tierlist'
};

exports.execute = async (interaction) => {
    const tierlist = new Discord.EmbedBuilder()
        .setTitle("🏆 Current Season TierList")
        .setColor(Discord.Colors.Gold)
        .setDescription("**Use `/gun <name>` to see detailed stats for any weapon!**")
        .addFields(
            { name: '🔥 Tier SS', value: 'MAC 10, CBR4, Kilo 141, M13, PPSh-41, Holger 26, Type 25, DL Q33, SVD, SKS, PKM, RPD, KRM-262' },
            { name: '⭐ Tier S', value: 'Fennec, Peacekeeper MK2, AS VAL, HVK-30, PP19 Bizon, QQ9, RUS-79U, ICR-1, AK117, Locus, ASM10, QXR, R9-0, JAK-12' },
            { name: '✅ Tier A', value: 'LK24, Razorback, HBRa3, DR-H, SP-R 208, CR-56 AMAX, BK57, Man-O-War, Swordfish, M4, Arctic.50, FR.556, KN-44, AK-47, M4LMG, Outlaw, Chopper, MX9, Cordite, Rytec AMR, HS0405' },
            { name: '🔵 Tier B', value: 'MSMC, GKS, Pharo, AGR 556, HG 40, MK2, BY15, Kilo Bolt-Action, XPR-50, Hades' },
            { name: '⚪ Tier C', value: 'Chicom, M16, PDW-57, S36, UL736, Echo' },
            { name: '❌ Tier D', value: 'M21 EBR, NA-45, Striker, HS2126' }
        )
        .setFooter({ text: 'Alex Gun Dealer | CODM Weapon Tier Rankings' })
        .setTimestamp();

    return interaction.reply({ embeds: [tierlist] });
};
