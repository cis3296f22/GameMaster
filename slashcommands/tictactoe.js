const TicTacToe = require('discord-tictactoe');

const run = async (client, interaction) => {
    const game = new TicTacToe({ language: 'en', commandOptionName: 'user' });
    game.handleInteraction(interaction);
}
    module.exports = {
        name: 'tictactoe',
        description: 'Play tictactoe',
        options: [
            {
                type: 'USER',
                name: 'user',
                description: "Mention the User",
                required: false
            }
        ],            
        run
}