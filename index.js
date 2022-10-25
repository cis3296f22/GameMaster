const TicTacToe = require('discord-tictactoe');
const TOKEN = process.env.TOKEN;
// const TOKEN = require(.env);
// set "command" to an empty string and "textCommand" with prefix you want
new TicTacToe({ textCommand: '-tictactoe', command: '' })

   .login(TOKEN)
   .then(() => console.log('TicTacToe bot is ready to be used.'));