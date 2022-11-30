const TicTacToe = require('discord-tictactoe');

const run = async (client, interaction) => {
    const game = new TicTacToe({ language: 'en', commandOptionName1: 'user', commandOptionName2: 'size' });
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
            },
            {
                type: "SIZE",
                name: "size",
                description: "State the size of the board",
                required: false
            },
        ],            
        run
}