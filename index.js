const TicTacToe = require('discord-tictactoe');
// const Connect4 = require('discord-connectFour');
const RPS = require('./rps.js');
// const RPS = require('discord-rock-paper-scissor');
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { RichEmbed } = require("discord.js");

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
// const game = new TicTacToe({ language: 'en', commandOptionName: 'user' });

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
    client.application.commands.create(
        {
            name: 'connectfour',
            description: 'Play Connect Four',
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
    console.log("Command: -connectfour registered")
    );
    client.application.commands.create(
        {
            name: 'rps',
            description: 'Play RockPaperScissors',
            // options: [
            //     {
            //         type: 'USER',
            //         name: 'user',
            //         description: "Mention the User",
            //         required: false
            //     }
            // ]            
        },
        GUILDID,
    console.log("Command: -rockpaperscissors registered")
    );
client.on('interactionCreate', async interaction => {
        if (interaction instanceof Discord.CommandInteraction && interaction.commandName === 'tictactoe') {
            console.log("Received: -tictacttoe from user")
            const game = new TicTacToe({ language: 'en', commandOptionName: 'user' });
            game.handleInteraction(interaction);
        }
        if (interaction instanceof Discord.CommandInteraction && interaction.commandName === 'connectfour') {
            console.log("Received: -connectfour from user")
            const game = new Connect4({ language: 'en', commandOptionName: 'user' });
            game.handleInteraction(interaction);
        }
        if (interaction instanceof Discord.CommandInteraction && interaction.commandName === 'rps') {
            console.log("Received: -rockpaperscissors from user")

            const chooseArr = ["⛰️", "📰", "✂️"];

            const embed = new MessageEmbed()
                    .setTitle("Rock Paper Scissors")
                    .setDescription("Add a a reaction to one of these emojies to play the game!")
                    .setColor("#ffffff")
                    .setTimestamp()
                
        

            // await interaction.reply({embeds: [embed]});

            let msg = await interaction.reply({embeds: [embed]});
            const rockFilter = (reaction, user) => reaction.emoji.name === chooseArr[0] && user.id === message.author.id;

        const rock = interaction.createReactionCollector(rockFilter, {time: 8000, dispose: true});



        rock.on("collect" , r => {
            r.users.remove(message.author.id);
            const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

            
            console.log(r.emoji.name);
            const result = getResult(r.emoji.name, botChoice);
            console.log(result);
            const embed = new MessageEmbed()
                .setTitle(result)
                .setDescription(r.emoji.name + 'vs' + botChoice);

            msg.edit({ embeds: [embed] });
        })

        function getResult(me, clientChosen) {
            if ((me === "⛰️" && clientChosen === "✂️") ||
                (me === "📰" && clientChosen === "⛰️") ||
                (me === "✂️" && clientChosen === "📰")) {
                    return "You won!";
                    } else if (me === clientChosen) {
                            return "It's a tie";
                    } else {
                            return "You lost!";
                    }
            }



            

           

            
            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // const m = await message.channel.send(embed);
            // const reacted = await interaction.promptMessage('m', interaction.guild., 30, chooseArr);
        
            // const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];
                
            // const result = getResult(reacted, botChoice);
            // const result = await getResult(reacted, botChoice);

            // await m.clearReactions();
                
            // embed
            //     .setDescription("")
            //     .setField(result, '${reacted} vs ${botChoice}');
            // m.edit(embed)
        
            // function getResult(me, clientChosen) {
            //         if ((me === "⛰️" && clientChosen === "✂️") ||
            //             (me === "📰" && clientChosen === "⛰️") ||
            //             (me === "✂️" && clientChosen === "📰")) {
            //                 return "You won!";
            //             } else if (me === clientChosen) {
            //                 return "It's a tie";
            //             } else {
            //                 return "You lost!";
            //             }
            //         }
                    
        
        }              
    });
});

client.login(TOKEN);