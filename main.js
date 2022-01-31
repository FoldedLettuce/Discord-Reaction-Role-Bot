const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS"] });

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const { MaleEmoji } = require('./config.json');
const { MaleRole } = require('./config.json');
const { FemaleEmoji } = require('./config.json');
const { FemaleRole } = require('./config.json');
const { botToken } = require('./config.json');
const { channel } = require('./config.json');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require (`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Bot is online!`);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift() .toLowerCase();



    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord, client);
    }  else if (command == 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    };
});
client.on('messageReactionAdd', async (reaction, user) => { //here
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === MaleEmoji) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(MaleRole); //these 3
        } //lines
        if (reaction.emoji.name === FemaleEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(FemaleRole);
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
        if (reaction.emoji.name === MaleEmoji) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(MaleRole); //these 3
        } //lines
        if (reaction.emoji.name === FemaleEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(FemaleRole);
        }
    }
}
); //to here


client.login(`${botToken}`);