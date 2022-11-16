# Sequence Diagram For Player Duel Rejected

```mermaid
sequenceDiagram
  
    participant GameMaster as GameMaster
    participant PlayerOne as PlayerOne
    participant AI as AI
    participant TicTacToeBot as TicTacToeBot
    
    Note left of GameMaster: Bot is running on Heroku
    Note left of PlayerOne: PlayerOne types slash command in server to activate tictactoe
    PlayerOne-->>+GameMaster: /tictactoe
    GameMaster->>-TicTacToeBot: Created Game Objects
    Note left of GameMaster: GameObjects include TicTacToe, EventHandler, and TicTacToeBot objects
    GameMaster->>+AI: PlayerOne Duel Challenge
    loop COLLECT MESSAGES
    Note left of PlayerOne: Player is chosen at random to make the first move in the game
    TicTacToeBot->>+PlayerOne: Listen for move
    PlayerOne-->>-TicTacToeBot: Move Made: isMoveValid(var): bool
    TicTacToeBot->>+TicTacToeBot: updateBoard(var,var): void
    TicTacToeBot->>+AI: Listen for move
    AI->>+AI: defensive(game): Checks if any defensive moves can be played
    AI->>+AI: checkBoard(game, player): Checks to see if there are any potential wins to stop
    AI->>+AI: offensive(game): Check if any offensive moves can be played
    AI->>+AI: checkBoard(game, player): Checks to see if there are any potential wins to make
    AI-->>-TicTacToeBot: Move Made: isMoveValid(var): bool
    TicTacToeBot->>+TicTacToeBot: updateBoard(var,var): void
    TicTacToeBot->>-TicTacToeBot: computerWinner(): int
    TicTacToeBot->>PlayerOne: Report Winner
    Note left of TicTacToeBot: Check if moves resulted in a winner, report players on a win, and exit loop
    end
    TicTacToeBot->>TicTacToeBot: Destroy Game Objects
```

This sequence diagram illustrates a player challenging the AI to a TicTacToe duel. PlayerOne uses slash command /tictactoe to create a game of TicTacToe. GameMaster recieves the slash command and instantiates the necessary objects to run a game of TicTacToe. TicTacToeBot then sends the duel request to the AI, which automatically accepts and starts the game. A starting player is chosen at random, and then that player gets to go first. If it is the player, they click the location they want to choose, and then TicTacToeBot checks to see if the move is valid. Once the move has been determined valid or invalid, TicTacToeBot will either have PlayerOne try again, or notify PlayerTwo (the AI) it is their turn, respectively. The AI will then see if there are any defensive moves to be made, followed by any offensive moves. If no moves are found, it will randomly select and available spot to fill.
The turns go back and forth until a winner is determined.
