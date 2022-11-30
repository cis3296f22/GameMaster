const { MessageEmbed, Message} = require('discord.js')

const run = async (client, interaction) => {

    // Player choices for game
    const chooseArr = ["⛰️", "📰", "✂️"];  
    // Record tracker
    let record = [0,0,0];
   
    // Send embeded message to play RPS
    const embed = new MessageEmbed()
        .setTitle("Rock Paper Scissors")
        .setDescription("React with one of these emojis to play the game!\n" + chooseArr)
        .addFields({ name: 'Game active for ', value: '5 minutes' })
        .setColor("#ffffff")
        .setTimestamp()

    let msg = await interaction.reply({
        embeds: [embed],
        fetchReply: true
    });
    
    // React to messages so player knows what emojis to use for RPS
    await msg.react(chooseArr[0]);
    await msg.react(chooseArr[1]);
    await msg.react(chooseArr[2]);

    // Ensures reaction is not collected when player hasn't selected emoji
    await new Promise((resolve, reject) => {
        setTimeout(()   => {
            resolve()
            
        }, 2000);
    })

    const Filter = (reaction, user) =>  {reaction.emoji.name === "⛰️" && user.id === msg.author.id};

    // Collect reactions for 5 minutes 
    const collector = msg.createReactionCollector({ Filter, time: (5 * 60000) });


    // Collect reactions and edit embed
    collector.on("collect" , async (r, user) => {
        
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];
        const result = getResult(r.emoji.name, botChoice);

        if (result === "You won!") {
            record[0] += 1;
        }
        else if (result === "You lost!") {
            record[1] += 1;
        }
        else {
            record[2] += 1;
        }

        const embed = new MessageEmbed()
            .setTitle(result)
            .setDescription(r.emoji.name + 'vs' + botChoice)
            .addFields({ name: 'Current Record: ', value: `${record[0]} , ${record[1]} , ${record[2]}`})
            msg.edit({ embeds: [embed] });
        
    });
    // Collection is over send embed
    collector.on('end' , r => { 
        const embed = new MessageEmbed()
            .setTitle('Time is up. Thank you for playing')
            .setDescription('/rps to play again')
            .addFields({ name: 'Final Record: ', value: `${record[0]} , ${record[1]} , ${record[2]}`})
            msg.edit({ embeds: [embed] });
        return;
    });
}
// Calculates winner
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

module.exports = {
    name: "rps",
    description: "desc here",
    run,
    getResult
}
