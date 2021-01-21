# Discord-Reaction-Role-Bot
This is a free open source easy to use code for a Discord reaction role bot!


# Requirements

This bot requires Node.Js and was developed and tested in Node.Js v14.15.4

You can get Node.Js from https://nodejs.org/en/download/


# Setup:

1. Clone the repository using git clone https://github.com/LiamMoroney/Discord-Reaction-Role-Bot.git (or download it as a .zip file and extract it)

2. In the main.js file insert your discord bot token (Found here: https://discord.com/developers/applications/)

3. Open the "reactionrole.js" file found in the commands folder.

4. First set the channel-id of where the reaction Embed will go on line 5

5. You can add a role by following the template found on line 6 making sure to edit where it says "templateRole" and "ROLE NAME"

6. Edit the emoji by following the template found on line 8 making sure to edit where it says "templateEmoji" and "EMOJI ID"
^ You can find the discord emoji id by typing "\:emoji_name_here:" in the server you plan to add the bot to, this should return something like "<:test:797317734920093706>" and that is what you want to put in the "EMOJI ID" part

7. Edit the contents of the Embed, Follow the template on line 14 to add lines to the embed. 
Also you can change the title on line 12 and a basic description on line 13

8. Next you will want to set the emojis the bot will react with by following the template on line 19

9. Next we will add the roles, Follow the template on line 28-30 replacing "templateEmoji" and "templateRole" with what role to give when they react with a emoji.

10. Lastly we want to remove the roles when they remove a reaction, Follow the template on line 42-44 replacing "templateEmoji" and "templateRole" with what role to remove when they unreact with a emoji.



Made with ❤️ by Folded Lettuce

# Please contact me through the sources below if you have any issues/require help!

Site: http://www.foldedlettuce.xyz

Twitter: https://twitter.com/FoldedLettuce

Email: liam@foldedlettuce.xyz

Discord: Folded Lettuce#0001 // 455862963417382923

Test Commit
