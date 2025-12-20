exports.run = (client, message, args) => {
   const Discord = require('discord.js')
    const tierlist = new Discord.EmbedBuilder()
        .setTitle("Current Season TierList")
        .setColor("DARK_GOLD")
        .setFooter(" 𝗧𝗶𝗲𝗿:𝗦𝗦:MAC 10, CBR4, Kilo 141, M13, PPSh-41, Holger 26, Type 25, DL Q33, SVD, SKS, PKM, RPD, KRM-262 \n 𝗧𝗶𝗲𝗿:𝗦:Fennec, Peacekeeper MK2, AS VAL, HVK-30, PP19 Bizon, QQ9, RUS-79U, ICR-1, AK117, Locus, ASM10, QXR, R9-0, JAK-12 \n 𝗧𝗶𝗲𝗿:𝗔:LK24, Razorback, HBRa3, DR-H, SP-R 208, CR-56 AMAX, BK57, Man-O-War, Swordfish, M4, Arctic.50, FR.556, KN-44, AK-47, M4LMG, Outlaw, Chopper, MX9, Cordite, Rytec AMR, HS0405 \n 𝗧𝗶𝗲𝗿:𝗕: MSMC, GKS, Pharo, AGR 556, HG 40, MK2, BY15, Kilo Bolt-Action, XPR-50, Hades \n 𝗧𝗶𝗲𝗿:𝗖: Chicom, M16, PDW-57, S36, UL736, Echo \n 𝗧𝗶𝗲𝗿:𝗗: \tM21 EBR, NA-45, Striker, HS2126 \n Your TierList Is Here")
        .setDescription("The image format of current tierlist is below.")
        .setImage('https://i.imgur.com/EbEj75H.jpeg')
    return message.reply({embeds: [tierlist]})
}
