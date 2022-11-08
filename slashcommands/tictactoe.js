const TicTacToe = require('discord-tictactoe');

const run = async (client, interaction) => {
    const game = new TicTacToe({ language: 'en', commandOptionName: 'user' });
    game.handleInteraction(interaction);
}
    module.exports = {
	name: "tictactoe",
    description: "TicTacToe",
    run
}