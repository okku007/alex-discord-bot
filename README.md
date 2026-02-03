# Alex Gun Dealer 🔫

Feature-rich Discord bot for Call of Duty Mobile weapon stats, built with Node.js and discord.js v14.

<a href>
    <img src="https://top.gg/api/widget/881612238841077861.svg">
</a>

## ✨ Features

- **Weapon Stats** - Get detailed stats for 80+ CODM weapons
- **Tier List** - Current season weapon rankings
- **Slash Commands** - Modern Discord slash command support
- **Legacy Commands** - Traditional prefix commands still work

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repository
```bash
git clone <repo>
cd alex-discord-bot
```

2. Install dependencies
```bash
npm install
```

3. Configure the bot

**Option A: Using .env (recommended)**
```bash
cp .env.example .env
# Edit .env with your values
```

**Option B: Using config.json**
```bash
cp example-config.json config.json
# Edit config.json with your values
```

4. Deploy slash commands (first time only)
```bash
npm run deploy
```

5. Start the bot
```bash
npm start
```

## 📋 Commands

### Slash Commands
| Command | Description |
|---------|-------------|
| `/gun <name>` | Get stats for a specific weapon |
| `/gunlist [page]` | List all available weapons |
| `/tierlist` | View current season tier rankings |
| `/ping` | Check bot latency |
| `/help` | Get help with commands |

### Legacy Prefix Commands
Use `.` as prefix (e.g., `.gun ak47`, `.tierlist`)

## ⚙️ Configuration

### Environment Variables (.env)
```env
DISCORD_TOKEN=your_bot_token
CLIENT_ID=your_client_id
PREFIX=.
```

### Permissions Required
- View Channels
- Send Messages
- Embed Links
- Read Message History

## 🔗 Links

**[Invite Alex Gun Dealer](https://discord.com/api/oauth2/authorize?client_id=881612238841077861&permissions=84992&scope=bot%20applications.commands)**

## 🤝 Contributing

Issues and PRs welcome for features, docs, or fixes.

---
Made in India with ❤️
