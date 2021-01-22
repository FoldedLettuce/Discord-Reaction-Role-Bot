module.exports = {
    name: 'reactionrole',
    description: "send the reactionrole message!",
    async execute(message, args, Discord, client) {
        const channel = '790008059803598848';
        const usRole = message.guild.roles.cache.find(role => role.name === "US")
        const euRole = message.guild.roles.cache.find(role => role.name === "EU")
        const jpRole = message.guild.roles.cache.find(role => role.name === "JP")
        const groupbuysRole = message.guild.roles.cache.find(role => role.name === "Groupbuys")
        const restocksRole = message.guild.roles.cache.find(role => role.name === "Restocks")
        const upcomingRole = message.guild.roles.cache.find(role => role.name === "Upcoming Releases")
        const dropsRole = message.guild.roles.cache.find(role => role.name === "Drops")
        const kithRole = message.guild.roles.cache.find(role => role.name === "Kith")
        const lowkeyRole = message.guild.roles.cache.find(role => role.name === "Lowkey Flips")
        const stocksRole = message.guild.roles.cache.find(role => role.name === "Stocks")
        const acoRole = message.guild.roles.cache.find(role => role.name === "ACO")
        const giveawaysRole = message.guild.roles.cache.find(role => role.name === "Giveaways")
        const generalInfoRole = message.guild.roles.cache.find(role => role.name === "General Info")
        const botFlipsRole = message.guild.roles.cache.find(role => role.name === "Bot Flips")
        const botRestockssRole = message.guild.roles.cache.find(role => role.name === "Bot Restocks")
        const sneakerInfoRole = message.guild.roles.cache.find(role => role.name === "Sneaker Info")
        const supremeRole = message.guild.roles.cache.find(role => role.name === "Supreme")

        const usEmoji = '🇺🇸';
        const euEmoji = '🇪🇺';
        const jpEmoji = '🇯🇵';
        const groupbuysEmoji = '💸';
        const restocksEmoji = '📦';
        const upcomingEmoji = '📅';
        const dropsEmoji = '🚨';
        const kithEmoji = '<:kith:790586994068553738>';
        const lowkeyEmoji = '🔃';
        const stocksEmoji = '📈';
        const acoEmoji = '🛒';
        const giveawaysEmoji = '🎉';
        const generalInfoEmoji = '📢';
        const botFlipsEmoji = '🔄';
        const botRestocksEmoji = '🤖';
        const sneakerInfoEmoji = '👟';
        const supremeEmoji = '<:supreme:790586993788190731>';

        let embed = new Discord.MessageEmbed()
        .setColor('#17b111')
        .setTitle('React to the corresponding emojis to get personalized notifications!')
        .setDescription('Once reacting you will gain your roles!\n\n'
            + `${usEmoji} US\n`
            + `${euEmoji} EU\n`
            + `${jpEmoji} JP\n`
            + `${groupbuysEmoji} Groupbuys\n`
            + `${restocksEmoji} Restocks\n`
            + `${upcomingEmoji} Upcoming Releases\n`
            + `${dropsEmoji} Drops\n`
            + `${kithEmoji} Kith\n`
            + `${lowkeyEmoji} Lowkey Flips\n`
            + `${stocksEmoji} Stocks\n`
            + `${acoEmoji} ACO\n`
            + `${giveawaysEmoji} Giveaways\n`
            + `${generalInfoEmoji} General Information\n`
            + `${botFlipsEmoji} Bot Flips\n`
            + `${botRestocksEmoji} Bot Restocks\n`
            + `${sneakerInfoEmoji} Sneaker Info\n`
            + `${supremeEmoji} Supreme`);

        let messageEmbed = await message.channel.send(embed);
        console.log("Reactionrole Message Created")
        messageEmbed.react(usEmoji);
        messageEmbed.react(euEmoji);
        messageEmbed.react(jpEmoji);
        messageEmbed.react(groupbuysEmoji);
        messageEmbed.react(restocksEmoji);
        messageEmbed.react(upcomingEmoji);
        messageEmbed.react(dropsEmoji);
        messageEmbed.react(kithEmoji);
        messageEmbed.react(lowkeyEmoji);
        messageEmbed.react(stocksEmoji);
        messageEmbed.react(acoEmoji);
        messageEmbed.react(giveawaysEmoji);
        messageEmbed.react(generalInfoEmoji);
        messageEmbed.react(botFlipsEmoji);
        messageEmbed.react(botRestocksEmoji);
        messageEmbed.react(sneakerInfoEmoji);
        messageEmbed.react(supremeEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
        
            if(reaction.message.channel.id == channel) {
                if (reaction.emoji.name === usEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(usRole);
                }
                if (reaction.emoji.name === euEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(euRole);
                }
                if (reaction.emoji.name === jpEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(jpRole);
                }
                if (reaction.emoji.name === groupbuysEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(groupbuysRole);
                }
                if (reaction.emoji.name === restocksEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(restocksRole);
                }
                if (reaction.emoji.name === upcomingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(upcomingRole);
                }
                if (reaction.emoji.name === dropsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dropsRole);
                }
                if (reaction.emoji.name === kithEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(kithRole);
                }
                if (reaction.emoji.name === lowkeyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(lowkeyRole);
                }
                if (reaction.emoji.name === stocksEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(stocksRole);
                }
                if (reaction.emoji.name === acoEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(acoRole);
                }
                if (reaction.emoji.name === giveawaysEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(giveawaysRole);
                }
                if (reaction.emoji.name === generalInfoEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(generalInfoRole);
                }
                if (reaction.emoji.name === botFlipsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(botFlipsRole);
                }
                if (reaction.emoji.name === botRestocksEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(botRestockssRole);
                }
                if (reaction.emoji.name === sneakerInfoEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sneakerInfoRole);
                }
                if (reaction.emoji.name === supremeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(supremeRole);
                }
                }
            }
        );

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
        
            if(reaction.message.channel.id == channel) {
                if (reaction.emoji.name === usEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(usRole);
                }
                if (reaction.emoji.name === euEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(euRole);
                }
                if (reaction.emoji.name === jpEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(jpRole);
                }
                if (reaction.emoji.name === groupbuysEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(groupbuysRole);
                }
                if (reaction.emoji.name === restocksEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(restocksRole);
                }
                if (reaction.emoji.name === upcomingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(upcomingRole);
                }
                if (reaction.emoji.name === dropsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dropsRole);
                }
                if (reaction.emoji.name === kithEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(kithRole);
                }
                if (reaction.emoji.name === lowkeyEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(lowkeyRole);
                }
                if (reaction.emoji.name === stocksEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(stocksRole);
                }
                if (reaction.emoji.name === acoEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(acoRole);
                }
                if (reaction.emoji.name === giveawaysEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(giveawaysRole);
                }
                if (reaction.emoji.name === generalInfoEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(generalInfoRole);
                }
                if (reaction.emoji.name === botFlipsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(botFlipsRole);
                }
                if (reaction.emoji.name === botRestocksEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(botRestockssRole);
                }
                if (reaction.emoji.name === sneakerInfoEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sneakerInfoRole);
                }
                if (reaction.emoji.name === supremeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(supremeRole);
                }
                }
            }
        );
    }
}
