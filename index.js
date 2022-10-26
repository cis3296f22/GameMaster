const TicTacToe = require('discord-tictactoe');
const Discord = require('discord.js');
//
const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env.TOKEN;
const GUILDID = process.env.GUILDID;

// ... THIS WILL SHOW TOKEN.  Do not use in public
// console.log(process.env.TOKEN);
// console.log(process.env.GUILDID);

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ],
});
const game = new TicTacToe({ language: 'en', commandOptionName: 'user' });

client.on('ready', () => {
    // Register your command
    console.log("Bot online")
    client.application.commands.create(
        {
            name: 'tictactoe',
            description: 'Play tictactoe',
            options: [
                {
                    type: 'USER',
                    name: 'user',
                    description: "Mention the User",
                    required: false
                }
            ]
            
        },
        GUILDID,
    console.log("Command: -tictacttoe registered")
    );
    

    // Listening for interactions
    client.on('interactionCreate', interaction => {
        if (interaction instanceof Discord.CommandInteraction && interaction.commandName === 'tictactoe') {
            console.log("Received: -tictacttoe from user")
            game.handleInteraction(interaction);
        }
    });
});

client.login(TOKEN);