const TicTacToe = require('discord-tictactoe');
// set "command" to an empty string and "textCommand" with prefix you want
new TicTacToe({ textCommand: '-tictactoe', command: '' })
   .login(process.env.TOKEN)
   .then(() => console.log('TicTacToe bot is ready to be used.'));