module.exports = {
    name: 'reactionrole',
    description: "send the reactionrole message!",
    async execute(message, args, Discord, client) {
        const { channel } = require('../config.json');

        const { MaleEmoji } = require('../config.json');
        const { MaleName } = require('../config.json')
        const { FemaleEmoji } = require('../config.json')
        const { FemaleName } = require('../config.json')
        

        const { MessageEmbed } = require('discord.js')
        let AAAAembed = new Discord.MessageEmbed()
            .setColor('#17b111')
            .setTitle('React to the corresponding emojis to get personalized notifications!')
            .setDescription('Once reacting you will gain your roles!\n\n'
                + `${MaleEmoji} for ${MaleName}\n` //copy this line
                + `${FemaleEmoji} for ${FemaleName}\n`)

        console.log("Reactionrole Message Created")
        let msg = await message.channel.send({ embeds: [AAAAembed]});
        msg.react(`${MaleEmoji}`) //copy this
        msg.react(`${FemaleEmoji}`)
    }
}