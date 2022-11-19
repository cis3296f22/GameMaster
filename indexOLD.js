const TicTacToe = require('discord-tictactoe');
const RPS = require('./slashcommands/rps.js');
const HILO = require('./slashcommands/hilo.js');
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env.TOKEN;
const GUILDID = process.env.GUILDID;

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ],
});

// Greetings message to new servers
const embed = new MessageEmbed()
        .setTitle("GameMaster")
        .setDescription("Thank you for inviting me to the server!!\nTo play a game use a slash command.\nHere are a list of my slash commands:")
        .setColor("#ffffff")
        .addFields({ name: 'TicTacToe', value: '/tictactoe' })
        .addFields({ name: 'Rock Paper Scisscors', value: '/rps' })
        .addFields({ name: 'HiLo Card Game', value: '/hilo' })
        .setTimestamp()

  
client.on('guildCreate', (g) => {
    const channel = g.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(g.me).has('SEND_MESSAGES'))
    channel.send({ embeds: [embed] })
})

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
    console.log("Command: /tictacttoe registered")
    );   
    client.application.commands.create(
        {
            name: 'rps',
            description: 'Play Rock Paper Scissors',          
        },
        GUILDID,
    console.log("Command: /rockpaperscissors registered") 
    );
    client.application.commands.create(
        {
            name: 'hilo',
            description: 'Play HiLo card game',          
        },
        GUILDID,
    console.log("Command: /hilo registered")
    );
client.on('interactionCreate', async interaction => {
        if (interaction instanceof Discord.CommandInteraction && interaction.commandName === 'tictactoe') {
            console.log("Received: /tictacttoe from user")
            const game = new TicTacToe({ language: 'en', commandOptionName: 'user' });
            game.handleInteraction(interaction);
        }
        if (interaction instanceof Discord.CommandInteraction && interaction.commandName === 'rps') {
            // console.log("Received: /rps from user")
            // RPS.run();
        }    
        if (interaction instanceof Discord.CommandInteraction && interaction.commandName === 'hilo') {
            // console.log("Received: /hilo from user")
            HILO.run();
        }          
    });
});

client.login(TOKEN);