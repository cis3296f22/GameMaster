import GameStateManager from '../state/GameStateManager';
import { Interaction, Message } from 'discord.js';
export default class GameCommand {
    private readonly manager;
    private readonly config;
    constructor(manager: GameStateManager);
    handleMessage(message: Message, noTrigger?: boolean): Promise<void>;
    handleInteraction(interaction: Interaction, noTrigger?: boolean): Promise<void>;
    private handleInvitation;
}
