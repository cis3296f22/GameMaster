const TicTacToe = require('discord-tictactoe');
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});
   
new TicTacToe({ language: 'fr', gameBoardReactions: true })
    .attach(client);
   
client.login(process.env.TOKEN);