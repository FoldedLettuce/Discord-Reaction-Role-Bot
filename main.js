const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS"] });

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const { ScreamEmoji } = require('./config.json');
const { ScreamRole } = require('./config.json')
const { CryEmoji } = require('./config.json')
const { CryRole } = require('./config.json')
const { channel } = require('./config.json');
const { bottoken } = require('./config.json');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require (`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`rrb is online!`);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift() .toLowerCase();



    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord, client);
        //client.commands.get('rolegui').execute(message, args, Discord, client);
    }  else if (command == 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command == 'owner') {
        if (message.author.id === '718881941465596026') {
            message.channel.send(`hi owner`)
        };
        if (message.author.id != '718881941465596026') {
            message.channel.send(`uRGHWHATDOYOUWANT`)
        };
    }
});
client.on('messageReactionAdd', async (reaction, user) => { //here
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === ScreamEmoji) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(ScreamRole); //these 3
        } //lines
        if (reaction.emoji.name === CryEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(CryRole);
        }
    }
}
);

client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === ScreamEmoji) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(ScreamRole); //these 3
        } //lines
        if (reaction.emoji.name === CryEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(CryRole);
        }
    }
}
); //to here


client.login(`${bottoken}`);