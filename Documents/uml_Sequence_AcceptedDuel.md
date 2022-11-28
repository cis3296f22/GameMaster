# Sequence Diagram For Player Duel Accepted
```mermaid
sequenceDiagram
  
    participant Discord as Discord
    participant GameMaster as GameMaster
    participant PlayerOne as PlayerOne
    participant PlayerTwo as PlayerTwo
    participant TicTacToeBot as TicTacToeBot
    
    PlayerOne->>+GameMaster: /tictactoe PlayerTwo
    Note left of PlayerOne: PlayerOne types slash command in server to challenge PlayerTwo to a tictactoe game
    GameMaster->>+Discord: Deploy slash command file
    Note left of GameMaster: Bot is running on Heroku
    Discord->>-TicTacToeBot: Created Game Objects
    Note left of GameMaster: GameObjects include TicTacToe, EventHandler, and TicTacToeBot objects
    Discord->>+GameMaster: PlayerOne Duel Challenge
    GameMaster->>+PlayerTwo: PlayerOne Duel Challenge
    PlayerTwo-->>-GameMaster: Duel Accepted: challengeAnswered()
    GameMaster->>Discord: Duel Accepted: challengeAnswered()
    Discord->>+GameMaster: PlayerTwo has Accepted Duel.
    GameMaster->>+PlayerOne: PlayerTwo has Accepted Duel
    loop COLLECT MESSAGES
    Note left of PlayerOne: Player is chosen at random to make the first move in the game
    TicTacToeBot->>+PlayerOne: Listen for move
    PlayerOne-->>-TicTacToeBot: Move Made: isMoveValid(var): bool
    TicTacToeBot->>+TicTacToeBot: updateBoard(var,var): void
    TicTacToeBot->>+PlayerTwo: Listen for move
    PlayerTwo-->>-TicTacToeBot: Move Made: isMoveValid(var): bool
    TicTacToeBot->>+TicTacToeBot: updateBoard(var,var): void
    TicTacToeBot->>-TicTacToeBot: computerWinner(): int
    TicTacToeBot->>PlayerOne: Report Winner
    TicTacToeBot->>PlayerTwo: Report Winner
    Note left of TicTacToeBot: Check if moves resulted in a winner, report players on a win, and exit loop
    end
    TicTacToeBot->>TicTacToeBot: Destroy Game Objects
```

This sequence diagram illustrates a player challenging another player to a TicTacToe duel. PlayerOne uses slash command /tictactoe PlayerTwo to challenge to a game of TicTacToe. GameMaster recieves the slash command and sends request to Discord to instantiate the necessary objects to run a game of TicTacToe. TicTacToeBot then sends the duel request to PlayerTwo. PlayerTwo responds accepts the duel. This results in TicTacToeBot collecting messages from PlayerOne and PlayerTwo. The first move of the game is chosen at random. Each move is verified to make sure it is the correct player making the move. The board is updated after everymove. After each player makes a move TicTacToeBot checks for a winner. If no winner is found the process is repeated until a player has won. Once a player has won each player is notified. TicTacToeBot and associated objects are then destroyed. If a new game wants to be played it will be initiated with GameMaster.

            
