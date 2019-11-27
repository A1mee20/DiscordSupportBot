const config = require('./config');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Op } = require('sequelize');

const PREFIX = '!!';

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
        client.user.setActivity('Hacking the Matrix');
    });

client.on('message', async message => {


    if (message.content.includes('die') || message.content.includes('suicide') || (message.content.includes('myself') && message.content.includes('cut'))) return message.channel.send(`TagHereToHelpRole ${message.author.username} is in need of your help. Hang in there, we are here for you!`);
    if (message.content.includes('Beautiful') || message.content.includes('beautiful')) return message.channel.send('No, you.');
    if (message.content.includes('woosh') || message.content.includes('Woosh')) {
        const emoteEmbed = new Discord.RichEmbed()
            .setAuthor('Wooosh!','https://cdn.discordapp.com/emojis/634119387120402453.png?v=1')
            .setImage('https://cdn.discordapp.com/emojis/554503376776462386.gif?v=1');

        return message.channel.send(emoteEmbed);
}
	//if (message.mentions.users.first() = message.channel.bot) return channel.send('I am not a person silly, tagging me is useless. I still love you though. ❤️');

    if (!message.content.startsWith(PREFIX)) return;
    const input = message.content.slice(PREFIX.length).trim();
    if (!input.length) return;
    const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);


  if (command === 'help') {
      return message.channel.send('For now, I do not know what my full capabilities are, but know that I love you. ❤️');
    }
    else if (command === 'love') {
        const myPhrases = ["You are adorable!","We have your back!","You are strong, you got this!","We believe in you!","You are adorable, never leave!","Be sure to breath, you are doing an amazing job.","Sending all the hugs your way....... SENT!"];
        const phrase = myPhrases[Math.floor(Math.random() * myPhrases.length)];
        const targetLove = message.mentions.users.first();
        const messageEmbed = new Discord.RichEmbed()
        .setColor('#9900ff')
        .setAuthor(`${targetLove.username} you are amazing. We love you a lot!`,'https://cdn.discordapp.com/emojis/600510685767794696.png?v=1')
        .setDescription(`${phrase}`);

        return message.channel.send(messageEmbed);

    }
});

client.login(config.token);