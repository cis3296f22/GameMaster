const run = async (client, interaction) => {
    return interaction.reply("Pong!");
}


module.exports = {
	name: "hilo",
    description: "HiLo Card Game",
    run
}