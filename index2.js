const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

const dotenv = require('dotenv');
const { run } = require('./rps.js');
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

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', async message => {
    const filter = (m) => m.author.id === message.author.id;


    if (message.content === 'list') {
        message.reply('ping\nricky\nlahey\njim\nsweet\ndrink\nknock knock\nfran\nhand\nfav');
    }
    if (message.content === 'ping') {
        message.reply('pong');
    }
    if (message.content === 'rps') {

        const chooseArr = ["⛰️", "📰", "✂️"];
        


        const embed = new MessageEmbed()
            .setTitle("Rock Paper Scissors")
            .setDescription("Add a reaction to one of these emojies to play the game!\n" + chooseArr)
            .setColor("#ffffff")
            .setTimestamp()

        // await message.channel.send(embed);
        let msg = await message.channel.send({embeds: [embed]});

        // await msg.react(chooseArr[0]);
        // await msg.react(chooseArr[1]);
        // await msg.react(chooseArr[2]);

        const rockFilter = (reaction, user) => reaction.emoji.name === chooseArr[0] && user.id === message.author.id;

        const rock = msg.createReactionCollector(rockFilter, {time: 8000, dispose: true});



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
    }

    // if (message.content === 'ricky') {
        
    //     message.reply({ files: [{ attachment: 'ricky.jpg' }] }); 
    // }
    
    // if (message.content === 'lahey') {
    //     message.reply({ files: [{ attachment: 'jim.jpg'}]});
    // }

    // if (message.content === 'jim') {
    //     message.reply({ files: [{ attachment: 'lahey.gif'}]});
    // }

    // if (message.content === 'sweet') {
    //     message.reply({ files: [{ attachment: 'ricky2.gif'}]});
    // }

    // if (message.content === 'drink') {
    //     message.reply({ files: [{ attachment: 'drunkjim.gif'}]});
    // }

    // if (message.content === 'knock knock') {
    //     message.reply({ files: [{ attachment: 'knockknock.gif'}]});
    // }

    // if (message.content === 'fran') {
    //     message.reply({ files: [{ attachment: 'farmerfran.gif'}]});
    // }
    // if (message.content === 'hand') {
    //     message.reply({ files: [{ attachment: 'stronghand.gif'}]});
    // }

    // if (message.content === 'fav') {
    //     message.reply({ files: [{ attachment: 'laugh.gif'}]});
    // }

    
});

client.login(TOKEN);