module.exports = {
    name: 'reactionrole',
    description: "send the reactionrole message!",
    async execute(message, args, Discord, client) {
        const channel = '901190047150264332';

        const ScreamEmoji = '😱'; //you copy
        const ScreamRole = '901193722379767858'; //these 3
        const ScreamRname = 'Scream'; //lines
        const CryEmoji = '😭';
        const CryRole = '901539832793288745';
        const CryRname = 'Cry';

        const { MessageEmbed } = require('discord.js')

        //const embed = new MessageEmbed()
        let AAAAembed = new Discord.MessageEmbed()
            .setColor('#17b111')
            .setTitle('React to the corresponding emojis to get personalized notifications!')
            .setDescription('Once reacting you will gain your roles!\n\n'
                + `${ScreamEmoji} for ${ScreamRname}\n` //copy this line
                + `${CryEmoji} for ${CryRname}\n`)

                //.addFields(
                //    { name: '\u200B', value: '${ScreamEmoji} : ${ScreamRname}' }, 
               //     { name: '\u200B', value: '${CryEmoji} : ${CryRname}' },
              //  )

        //message.channel.send({ content: 'CyI8pjSq4uHokVrnNe7773TeFv7k2Y', embeds: [AAAAembed] });
        //let messageEmbed = await message.channel.send(embed);
        console.log("Reactionrole Message Created")
        /*if (message.content.includes == 'CyI8pjSq4uHokVrnNe7773TeFv7k2Y') {
            messageEmbed.react(ScreamEmoji);
            return null;
        }*/
        let msg = await message.channel.send(AAAAembed); //        let msg = await message.channel.send({ content: 'CyI8pjSq4uHokVrnNe7773TeFv7k2Y', embeds: [AAAAembed] });
        msg.react('😱') //copy this
        msg.react('😭')

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
        
            if(reaction.message.channel.id == channel) {
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
        
            if(reaction.message.channel.id == channel) {
                if (reaction.emoji.name === ScreamEmoji) { //you copy
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ScreamRole); //these 3
                } //lines
                if (reaction.emoji.name === CryEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(CryRole);
                }
                }
            }
        );
    }
}
