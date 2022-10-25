import Entity from './Entity';
import Game from './Game';
export default class AI implements Entity {
    id: string;
    displayName: string;
    operate(game: Game): AIComputeResult;
    toString(): string;
    private static minimax;
    private static getComputeType;
}
export interface AIComputeResult {
    move?: number;
    score: number;
}
