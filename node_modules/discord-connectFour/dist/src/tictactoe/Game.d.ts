import { Player } from './Player';
export default class Game {
    private readonly _boardSize;
    private readonly _board;
    private _currentPlayer;
    private _winner;
    constructor(boardSize?: number);
    get boardSize(): number;
    get board(): Array<Player>;
    get finished(): boolean;
    get currentPlayer(): Player;
    get winner(): Player;
    get boardFull(): boolean;
    get boardEmpty(): boolean;
    get emptyCellAmount(): number;
    clone(): Game;
    isMoveValid(position: number): boolean;
    updateBoard(player: Player, position: number): void;
    nextPlayer(): void;
    private computeWinner;
    private toIndex;
    private validEquals;
}
