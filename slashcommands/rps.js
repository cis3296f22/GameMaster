const { MessageEmbed, Message} = require('discord.js')
const run = async (client, interaction) => {

    // Player choices for game
    const chooseArr = ["⛰️", "📰", "✂️"];  
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
        
    // Send embeded message to play RPS
    const embed = new MessageEmbed()
        .setTitle("Rock Paper Scissors")
        .setDescription("React with one of these emojis to play the game!\n" + chooseArr)
        .addFields({ name: 'Game active for ', value: '5 minutes' })
        .setColor("#ffffff")
        .setTimestamp()

    // let msg = await message.channel.send({embeds: [embed]});
    let msg = await interaction.reply({
        embeds: [embed],
        fetchReply: true
    });
    
    // React to messages so player knows what emojis to use for RPS
    await msg.react(chooseArr[0]);
    await msg.react(chooseArr[1]);
    await msg.react(chooseArr[2]);

    const Filter = (reaction, user) =>  {reaction.emoji.name === "⛰️" && user.id === msg.author.id};

    // Collect reactions for 5 minutes 
    const collector = msg.createReactionCollector({ Filter, time: (5 * 60000) });


    // Collect reactions
    collector.on("collect" , async (r, user) => {
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        // console.log(r.emoji.name);
        const result = getResult(r.emoji.name, botChoice);

        // console.log(result);

        const embed = new MessageEmbed()
            .setTitle(result)
            .setDescription(r.emoji.name + 'vs' + botChoice)
            msg.edit({ embeds: [embed] });
        
    });

    collector.on('end' , r => { 
        const embed = new MessageEmbed()
            .setTitle('Thank you for playing')
            .setDescription('/rps to play again')
            msg.edit({ embeds: [embed] });
    });
}

module.exports = {
	name: "rps",
    description: "Rock Paper Scissors",
    run
}