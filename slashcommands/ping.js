const run = async (client, interaction) => {
    return interaction.reply("Pong!");
}


module.exports = {
	name: "ping",
    description: "Replies with Pong!",
    run
}