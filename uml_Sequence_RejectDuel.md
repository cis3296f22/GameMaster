# Sequence Diagram For Player Duel Rejected
```mermaid
sequenceDiagram:
  
    participant Main as GameMaster
    participant PlayerOne as PlayerOne
    participant PlayerTwo as PlayerTwo
    
    GameMaster->>+PlayerOne: Start Bot
    PlayerOne-->>-GameMaster: /tictactoe PlayerTwo
    GameMaster-->+GameMaster: Created Game Object
    GameMaster->>+PlayerTwo: PlayerOne Duel Challenge
    PlayerTwo-->>-GameMaster: Duel Rejected
    GameMaster->>+PlayerOne: PlayerTwo has rejected the dual
    GameMaster-->+GameMaster: Destroy Game Object
    
```
