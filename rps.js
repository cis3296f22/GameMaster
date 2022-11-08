const { RichEmbed } = require("discord.js");
// const { promptMessage } = require('functions.js');

const chooseArr = ["⛰️", "📰", "✂️"];

module.exports = {
    name: "rps", 
    category: "fun",
    description: " Rock Paper Scissors Game. React to one of the emojis to play the game.",
    usage: "rps",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName)
            .setDescription("Add a a reaction to one of these emojies to play the game!")
            .setTimeStamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage('m', message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];
        
        const result = await getResult(reacted, botChoice);
        await m.clearReactions();
        
        embed
            .setDescription("")
            .addField(result, '${reacted} vs ${botChoice}');

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
}