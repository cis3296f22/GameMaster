# Sequence Diagram For Player Duel Rejected

```mermaid
sequenceDiagram
  
    participant GameMaster as GameMaster
    participant PlayerOne as PlayerOne
    participant PlayerTwo as PlayerTwo
    participant TicTacToeBot as TicTacToeBot
    
    Note left of GameMaster: Bot is running on Heroku
    Note left of PlayerOne: PlayerOne types slash command in server to challenge PlayerTwo to a tictactoe game
    PlayerOne-->>+GameMaster: /tictactoe PlayerTwo
    GameMaster->>TicTacToeBot: Created Game Objects
   
    Note left of GameMaster: GameObjects include TicTacToe, EventHandler, and TicTacToeBot objects
    TicTacToeBot->>+PlayerTwo: PlayerOne Duel Challenge
    PlayerTwo-->>-TicTacToeBot: Duel Accepted: challengeAnswered()
    TicTacToeBot->>+PlayerOne: PlayerTwo has Rejected Duel
    TicTacToeBot->>TicTacToeBot: Destroy Game Objects
    
```

This sequence diagram illustrates a player challenging another player to a TicTacToe duel. PlayerOne uses slash command /tictactoe PlayerTwo to challenge to a game of TicTacToe. GameMaster recieves the slash command and instantiates the necessary objects to run a game of TicTacToe. TicTacToeBot then sends the duel request to PlayerTwo. PlayerTwo responds rejected the duel. This results in TicTacToeBot terminating along with all the associated objects.
