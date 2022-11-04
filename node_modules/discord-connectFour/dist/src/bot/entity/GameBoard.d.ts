import MessagingTunnel from '../messaging/MessagingTunnel';
import GameStateManager from '../state/GameStateManager';
import GameConfig from '../../config/GameConfig';
import Entity from '../../tictactoe/Entity';
import { ButtonInteraction, Message, WebhookEditMessageOptions } from 'discord.js';
export default class GameBoard {
    readonly tunnel: MessagingTunnel;
    private readonly manager;
    private readonly game;
    private readonly _entities;
    private readonly configuration;
    private reactionsLoaded;
    constructor(manager: GameStateManager, tunnel: MessagingTunnel, member2: Entity, configuration: GameConfig);
    get entities(): Array<Entity>;
    get content(): WebhookEditMessageOptions;
    private static reactionToMove;
    private static buttonIdentifierToMove;
    attachTo(message: Message): Promise<void>;
    attemptNextTurn(): Promise<void>;
    update(interaction?: ButtonInteraction): Promise<void>;
    private getEntity;
    private onEmojiMoveSelected;
    private onButtonMoveSelected;
    private playTurn;
    private onExpire;
    private awaitMove;
}
