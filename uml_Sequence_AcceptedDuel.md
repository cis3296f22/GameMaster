# Sequence Diagram For Player Duel Accepted
```mermaid
sequenceDiagram

    Note left of GameMaster: Bot is running on Heroku
    Note left of PlayerOne: PlayerOne types slash command in server to challenge PlayerTwo to a tictactoe game
    PlayerOne-->>+GameMaster: /tictactoe PlayerTwo
    GameMaster->>GameMaster: Created Game Objects
    Note left of GameMaster: GameObjects include TicTacToe, EventHandler, and TicTacToeBot objects
    GameMaster->>+PlayerTwo: PlayerOne Duel Challenge
    PlayerTwo-->>-GameMaster: Duel Accepted: challengeAnswered()
    GameMaster->>+PlayerOne: PlayerTwo has Accepted Duel
    Note left of PlayerOne: Player is chosen at random to make the first move in the game
    loop collect message
    GameMaster->>+PlayerOne: Listen for move
    PlayerOne-->>-GameMaster: Move Made: isMoveValid(var): bool
    GameMaster->>+GameMaster: updateBoard(var,var): void
    GameMaster->>+PlayerTwo: Listen for move
    PlayerTwo-->>-GameMaster: Move Made: isMoveValid(var): bool
    GameMaster->>+GameMaster: updateBoard(var,var): void
    GameMaster->>+GameMaster: computerWinner(): int
    Note left of GameMaster: Check if moves resulted in a winner
    end
    GameMaster->>GameMaster: Destroy Game Objects
```
            
