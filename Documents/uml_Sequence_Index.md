# Sequence Diagram For GameMaster Slash Commands

```mermaid
sequenceDiagram
    
    participant Discord as Discord
    participant GameMaster as GameMaster
    participant Player as Player
    
    Note left of GameMaster: Bot is running on Heroku
    Note left of Player: PlayerOne types slash command in server to challenge PlayerTwo to a tictactoe game
    Player->>+GameMaster: Sends slash command ( /tictactoe , /rps , /hilo )
    GameMaster->>+Discord: Deploy slash command file using index.js searching slashcommand directory for command
    Discord->>+GameMaster: Slash command executed and interaction for game begins
    GameMaster->>+Player: If game is rps or hilo then embed message sent with emoji reaction collection started or see other diagrams for tictactoe
    
    
```

This sequence diagram illustrates a player using a slash command. The slash command is looked for in the slash command directory and executed. The game then begins. If embed 
message games are played than emoji reaction collection begins other wise see other diagrams in project documents for tictactoe duel accept and reject sequence diagrams.
