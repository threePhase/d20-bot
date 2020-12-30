if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const crypto = require('crypto');
const Discord = require('discord.js');
const client = new Discord.Client();

const { DISCORD_BOT_TOKEN } = process.env;

const roll = ({d}) => {
  // return a random number between 1 and d inclusive
  return crypto.randomInt(1, d + 1);
}
const d20Map = [
  null, // unused - rolls range from indicies 1-20
  'd201',
  'd202',
  'd203',
  'd204',
  'd205',
  'd206',
  'd207',
  'd208',
  'd209',
  'd2010',
  'd2011',
  'd2012',
  'd2013',
  'd2014',
  'd2015',
  'd2016',
  'd2017',
  'd2018',
  'd2019',
  'd2020',
];

const fateMap = [
  null, // unused - rolls range from indicies 1-3
  'dfneg',
  'df',
  'dfplus',
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log('d20-bot ready');
});

client.on('message', msg => {
  if (msg.content === '!d20') {
    const idx = roll({ d: 20 });
    const emoji = client.emojis.cache.find((emoji) => emoji.name === d20Map[idx]);
    msg.reply(`${emoji}`);
  }
  if (msg.content === '!4dF') {
    const values = Array.from({ length: 4 }, () => roll({ d: 3 }));
    const sum = values.reduce((acc, val) =>
      // subtract 2 from all values to get range from -1 to +1
      acc + val - 2, 0);
    const rolls = values.map((v) =>
      client.emojis.cache.find((emoji) => emoji.name === fateMap[v]));
    msg.reply(`${rolls.join('')}: ${sum}`);
  }
});

client.login(DISCORD_BOT_TOKEN);
