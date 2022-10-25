import Entity from '../../tictactoe/Entity';
import { Player } from '../../tictactoe/Player';
import { MessageOptions } from 'discord.js';
export default class GameBoardBuilder {
    static readonly MOVE_REACTIONS: string[];
    protected emojies: string[];
    protected title: string;
    protected state: string;
    protected boardSize: number;
    protected boardData: Player[];
    constructor();
    withTitle(player1: Entity, player2: Entity): GameBoardBuilder;
    withEmojies(first: string, second: string): GameBoardBuilder;
    withBoard(boardSize: number, board: Player[]): GameBoardBuilder;
    withEntityPlaying(entity?: Entity): GameBoardBuilder;
    withEndingMessage(winner?: Entity): GameBoardBuilder;
    toMessageOptions(): MessageOptions;
}
