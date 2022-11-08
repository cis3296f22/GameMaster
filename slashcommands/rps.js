const { MessageEmbed, Message} = require('discord.js')
const run = async (client, interaction) => {
    const chooseArr = ["⛰️", "📰", "✂️"];  

    const embed = new MessageEmbed()
        .setTitle("Rock Paper Scissors")
        .setDescription("Add a reaction to one of these emojies to play the game!\n" + chooseArr)
        .setColor("#ffffff")
        .setTimestamp()

    // let msg = await message.channel.send({embeds: [embed]});
    let msg = await interaction.reply({
        embeds: [embed],
        fetchReply: true
    });

    const rockFilter = (reaction, user) => reaction.emoji.name === chooseArr[0] && user.id === message.author.id;

    const rock = msg.createReactionCollector(rockFilter, {time: 8000, dispose: true});



    rock.on("collect" , r => {
        r.users.remove(msg.author.id);
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

            
        console.log(r.emoji.name);
        const result = getResult(r.emoji.name, botChoice);

        console.log(result);
        const embed = new MessageEmbed()
            .setTitle(result)
            .setDescription(r.emoji.name + 'vs' + botChoice)

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



    



    // const embed = new MessageEmbed()
    //     .setTitle("Rock Paper Scissors")
    //     .setDescription("Add a reaction to one of these emojies to play the game!\n" + chooseArr)
    //     .setColor("#ffffff")
    //     .setTimestamp()

    //     // await message.channel.send(embed);
    // let msg = await message.channel.send({embeds: [embed]});

    

    //     // await msg.react(chooseArr[0]);
    //     // await msg.react(chooseArr[1]);
    //     // await msg.react(chooseArr[2]);

    // const rockFilter = (reaction, user) => reaction.emoji.name === chooseArr[0] && user.id === message.author.id;

    // const rock = msg.createReactionCollector(rockFilter, {time: 8000, dispose: true});



    // rock.on("collect" , r => {
    //     r.users.remove(message.author.id);
    //     const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

            
    //     console.log(r.emoji.name);
    //     const result = getResult(r.emoji.name, botChoice);
    //     console.log(result);
    //     const embed = new MessageEmbed()
    //         .setTitle(result)
    //         .setDescription(r.emoji.name + 'vs' + botChoice);

    //     msg.edit({ embeds: [embed] });
    // })

    // function getResult(me, clientChosen) {
    //     if ((me === "⛰️" && clientChosen === "✂️") ||
    //         (me === "📰" && clientChosen === "⛰️") ||
    //         (me === "✂️" && clientChosen === "📰")) {
    //             return "You won!";
    //             } else if (me === clientChosen) {
    //                     return "It's a tie";
    //             } else {
    //                     return "You lost!";
    //             }
    //     }
}

module.exports = {
	name: "rps",
    description: "Rock Paper Scissors",
    run
}