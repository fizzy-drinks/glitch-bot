const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();
const prefix = '?';

const EMOJI_LETTER_MAP = {
  a: '๐ฆ',
  b: '๐ง',
  c: '๐จ',
  d: '๐ฉ',
  e: '๐ช',
  f: '๐ซ',
  g: '๐ฌ',
  h: '๐ญ',
  i: '๐ฎ',
  j: '๐ฏ',
  k: '๐ฐ',
  l: '๐ฑ',
  m: '๐ฒ',
  n: '๐ณ',
  o: '๐ด',
  p: '๐ต',
  q: '๐ถ',
  r: '๐ท',
  s: '๐ธ',
  t: '๐น',
  u: '๐บ',
  v: '๐ป',
  w: '๐ผ',
  x: '๐ฝ',
  y: '๐พ',
  z: '๐ฟ'
};

const EMOJI_NOTHING = '<:nothing:408985340234432513>';
const EMOJI_PISS_1 = '<:p1:401176472099749908>';
const EMOJI_PISS_2 = '<:p2:401176513900314626>';
const EMOJI_PISS_3 = '<:p3:401176528597024780>';
const EMOJI_PISS_4 = '<:p4:401176542102683649>';
const EMOJI_CEREAL = '<:cereal:845447930965655563>';

const commandPiss = (message, args) => {
  let msg = '';
  if (!args.length) {
    msg = `
${EMOJI_PISS_1}${EMOJI_PISS_2}
${EMOJI_PISS_3}${EMOJI_PISS_4}
    `;
  } else {
    const name = args
      .join('_')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

    let firstRow = '';
    for (let i = 0; i < name.length - 1; i++) {
      firstRow += `${EMOJI_NOTHING} `;
    }

    firstRow += EMOJI_PISS_1 + EMOJI_PISS_2;

    let secondRow = name
      .split('')
      .map((letter) => EMOJI_LETTER_MAP[letter] || EMOJI_NOTHING)
      .join(' ');

    secondRow += EMOJI_PISS_4;

    msg = `
${firstRow}
${secondRow}
  `;
  }
  message.channel.send(msg);
};

const commandHolyshit = (message) => {
  message.channel.send(`
${EMOJI_CEREAL}${EMOJI_PISS_2}
${EMOJI_PISS_3}${EMOJI_PISS_4}
  `);
};

const commandContribute = (message) => {
  message.reply('you can contribute at https://github.com/lunaboona/glitch-bot uwu');
};

const commandHelp = (message) => {
  message.reply(`available commands:
\`?piss <text?>\`: pisses on your text
\`?holyshit\`: idk
\`?contribute\`: please do
\`?ajuda\`: comandos em portuguรชs
  `);
};
const commandAjuda = (message) => {
  message.reply(`comandos disponรญveis:
\`?mijar <texto?>\`: mija no texto
\`?catapimbas\`: sei la
\`?contribute\`: link pro github
\`?help\`: commands in english
  `);
};

const getCommand = (message) => {
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  return [command, args];
};

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const [command, args] = getCommand(message);

  if (command === 'piss') {
  }
  switch (command) {
    case 'piss':
    case 'mijar': {
      commandPiss(message, args);
      break;
    }
    case 'holyshit':
    case 'catapimbas': {
      commandHolyshit(message);
      break;
    }
    case 'contribute':
    case 'repo':
    case 'github': {
      commandContribute(message);
      break;
    }
    case 'help': {
      commandHelp(message);
      break;
    }
    case 'ajuda': {
      commandAjuda(message);
      break;
    }
  }
});

client.login(process.env.BOT_TOKEN);
