if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const crypto = require('crypto');
const Discord = require('discord.js');
const client = new Discord.Client();

const { DISCORD_BOT_TOKEN } = process.env;

const roll = ({d}) => {
  // return a random number between 1 and d inclusive
  return crypto.randomBytes(1).readUInt8(0) % d + 1;
}

const fateMap = [
  null, // unused - rolls range from indicies 1-3
  '➕',
  '➖',
  '⬛',
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log('d20-bot ready');
});

client.on('message', msg => {
  if (msg.content === '!d20') {
    const value = roll({ d: 20 });
    msg.reply(`${value}`);
  }
  if (msg.content === '!4dF') {
    const values = Array.from({ length: 4 }, () => roll({ d: 3 }));
    const rolls = values.map((v) => fateMap[v]);
    msg.reply(`${rolls}`);
  }
});

client.login(DISCORD_BOT_TOKEN);
