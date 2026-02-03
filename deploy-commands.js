const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

// Load environment variables if .env exists
try {
    require('dotenv').config();
} catch (e) {
    // dotenv not installed, use config.json
}

// Support both .env and config.json
let config;
if (process.env.DISCORD_TOKEN) {
    config = {
        token: process.env.DISCORD_TOKEN,
        clientId: process.env.CLIENT_ID,
        guildId: process.env.GUILD_ID
    };
} else {
    config = require('./config.json');
}

if (!config.clientId) {
    console.error('❌ CLIENT_ID is required! Add it to .env or config.json');
    process.exit(1);
}

// Load guns for autocomplete options
const guns = require('./data/guns.json');

// Define slash commands
const commands = [
    new SlashCommandBuilder()
        .setName('gun')
        .setDescription('Get stats for a specific weapon')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The weapon name')
                .setRequired(true)
                .addChoices(
                    // Add top 25 guns as choices (Discord limit)
                    ...guns.slice(0, 25).map(g => ({
                        name: g.displayName || g.name.toUpperCase(),
                        value: g.name
                    }))
                )
        ),
    new SlashCommandBuilder()
        .setName('gunlist')
        .setDescription('List all available weapons')
        .addIntegerOption(option =>
            option.setName('page')
                .setDescription('Page number')
                .setRequired(false)
        ),
    new SlashCommandBuilder()
        .setName('tierlist')
        .setDescription('View the current season weapon tier list'),
    new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help with bot commands'),
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check bot latency')
];

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
    try {
        console.log(`🔄 Started refreshing ${commands.length} slash commands...`);

        if (config.guildId) {
            console.log(`🎯 Deploying to specific guild: ${config.guildId}`);
            data = await rest.put(
                Routes.applicationGuildCommands(config.clientId, config.guildId),
                { body: commands.map(cmd => cmd.toJSON()) }
            );
        } else {
            console.log('ww Deploying globally (can take up to 1 hour to propagate)...');
            data = await rest.put(
                Routes.applicationCommands(config.clientId),
                { body: commands.map(cmd => cmd.toJSON()) }
            );
        }

        console.log(`✅ Successfully registered ${data.length} slash commands globally!`);
        console.log('📝 Commands:', data.map(c => `/${c.name}`).join(', '));
    } catch (error) {
        console.error('❌ Error deploying commands:', error);
    }
})();
