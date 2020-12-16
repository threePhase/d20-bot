# d20-bot

Discord bot that generates a random number between 1 and 20

## Requirements

- Node 12.0+
- `npm`

## Setup

Create a new application in the
[Discord Developer Portal](https://discord.com/developers/applications/)

Set `DISCORD_BOT_TOKEN` to the value found in the Discord Developer Portal
in the `Bot` section.

For local development, this can be done by creating a file called `.env` in the
same directory as the project with the following contents:

```
DISCORD_BOT_TOKEN=<VALUE_FROM_DEVELOPER_PORTAL>
```

Install dependencies

```
npm i
```

Run the bot locally

```
node server.js
```


Use the following link to authorize the bot for your server. Be sure to
replace `CLIENT_ID` with the value found in the Discord Developer Portal under
`General Information`.

```
https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot
```

## Usage

Bot responds to the command `!d20`
