import { EventType } from './bot/EventHandler';
import Config from './config/Config';
import { Client, CommandInteraction, Message } from 'discord.js';
declare class TicTacToe {
    private readonly config;
    private readonly eventHandler;
    private readonly bot;
    constructor(config?: Config);
    login(token?: string): Promise<void>;
    attach(client: Client): void;
    handleMessage(message: Message): void;
    handleInteraction(interaction: CommandInteraction): void;
    on(eventName: EventType, listener: (data?: any) => void): void;
}
export = TicTacToe;
