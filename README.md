# Discord-Reaction-Role-Bot
This is a free open source easy to use code for a Discord reaction role bot!


# Requirements

This bot requires Node.Js and Discord.Js v13 and was developed and tested in Node.Js v16.9.0

You can get Node.Js from https://nodejs.org/en/download/
You can get Discord.Js from doing "npm install discord.js-v13" in a terminal.


# Setup:

Video Setup: https://youtu.be/1Q5rwuextww


1. Clone the repository using `git clone https://github.com/FoldedLettuce/Discord-Reaction-Role-Bot.git` (or download it as a .zip file and extract it)

2. In the config.json file, insert your bot token into the "token" value. Tokens are found here: https://discord.com/developers/applications/

3. In the config.json file, change the channel ID to the channel you would like the reaction message posted (To get the channel ID turn on developer mode https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID- and right click on a channel and press "Copy ID").

4. Open the "reactionrole.js" file found in the commands folder.

5. You can add a role by following the template found on line 7 making sure to edit where it says "(name)Emoji" and "(name)Role" and "(name)Rname" as well as making sure to make corresponding values in config.json

6. Repeat step 5, just in main.js

7. Moving Back to reactionrole.js. Duplicate line 20, making sure to put it in between the existing line 20 and 21, and changing the values to match the ones in step 5.

8. Choose your emojis, prefably unicode, custom ones may not work currently, I personally use https://emojipedia.org/ to get unicode.

9. Next, move back to main.js and scroll down to line 50, then copy lines 51, 52 and 53, change ScreamEmoji to what you chose in step 5/6 and ScreamRole to what you chose in step 5/6

10. Now repeat step 9, but for lines 67, 68, and 69.

Made with ❤️ by Folded Lettuce and Fixed by (Another)Pillow

# Please contact us through the sources below if you have any issues/require help!

Discord Server: https://discord.gg/AUPTEzZE6v

Site: http://www.foldedlettuce.xyz

Twitter: https://twitter.com/FoldedLettuce

Email: liam@foldedlettuce.xyz

Discords: 
lettuce#0001 // 455862963417382923 <br/>
GeoIsCool#0019 // 718881941465596026
