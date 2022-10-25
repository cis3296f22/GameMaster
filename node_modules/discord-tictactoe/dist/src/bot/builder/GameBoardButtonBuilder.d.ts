import GameBoardBuilder from './GameBoardBuilder';
import Entity from '../../tictactoe/Entity';
import { MessageOptions } from 'discord.js';
export default class GameBoardButtonBuilder extends GameBoardBuilder {
    private buttonLabels;
    private buttonStyles;
    private customEmojies;
    private disableButtonsAfterUsed;
    withButtonsDisabledAfterUse(): GameBoardBuilder;
    withEntityPlaying(entity?: Entity): GameBoardBuilder;
    withEmojies(first: string, second: string): GameBoardBuilder;
    toMessageOptions(): MessageOptions;
    private createButton;
}
