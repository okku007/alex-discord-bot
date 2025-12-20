const {Client, Collection, GatewayIntentBits, ActivityType} = require('discord.js');
const fs = require("fs");
// const { AutoPoster } = require('topgg-autoposter')


const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});
const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        // console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});
client.on("ready", () => {
    client.user.setActivity(".help", {type: ActivityType.Watching})
});
// const poster = AutoPoster(config.topGG, client)
//
// poster.on('posted', (stats) => {
//     console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
// })

client.login(config.token);
