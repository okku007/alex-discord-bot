const { Client, Collection, GatewayIntentBits, ActivityType, Events } = require('discord.js');
const fs = require("fs");

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
        prefix: process.env.PREFIX || '.',
        clientId: process.env.CLIENT_ID
    };
} else {
    config = require("./config.json");
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.config = config;
client.commands = new Collection();
client.slashCommands = new Collection();

// Load events
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

// Load commands
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);

        // Register as slash command if it has slashData
        if (props.slashData) {
            client.slashCommands.set(props.slashData.name, props);
        }
    });
});

// Handle slash command interactions
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.slashCommands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(`Error executing ${interaction.commandName}:`, error);
        const errorMessage = { content: 'There was an error executing this command!', ephemeral: true };
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp(errorMessage);
        } else {
            await interaction.reply(errorMessage);
        }
    }
});

// Set activity on ready
client.on("ready", () => {
    console.log(`${client.user.tag} is online!`);
    console.log(`Serving ${client.guilds.cache.size} servers`);
    client.user.setActivity("/gun or .help", { type: ActivityType.Watching });
});

// Error handling
client.on('error', error => {
    console.error('Discord client error:', error);
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

client.login(config.token);
