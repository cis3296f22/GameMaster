export declare const enum Player {
    None = 0,
    First = 1,
    Second = 2
}
export declare const enum PlayerComputeType {
    Human = -1,
    None = 0,
    Computer = 1
}
export declare function getOpponent(player: Player): Player;
