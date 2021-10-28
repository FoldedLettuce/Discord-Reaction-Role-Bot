module.exports = {
    name: 'reactionrole',
    description: "send the reactionrole message!",
    async execute(message, args, Discord, client) {
        const { channel } = require('../config.json');

        const { ScreamEmoji } = require('../config.json');
        const { ScreamRole } = require('../config.json')
        const { ScreamRname } = require('../config.json')
        const { CryEmoji } = require('../config.json')
        const { CryRole } = require('../config.json')
        const { CryRname } = require('../config.json')
        

        const { MessageEmbed } = require('discord.js')
        let AAAAembed = new Discord.MessageEmbed()
            .setColor('#17b111')
            .setTitle('React to the corresponding emojis to get personalized notifications!')
            .setDescription('Once reacting you will gain your roles!\n\n'
                + `${ScreamEmoji} for ${ScreamRname}\n` //copy this line
                + `${CryEmoji} for ${CryRname}\n`)
				
        console.log("Reactionrole Message Created")
        let msg = await message.channel.send(AAAAembed); 
        msg.react(`${ScreamEmoji}`) //copy this
        msg.react(`${CryEmoji}`)
    }
}