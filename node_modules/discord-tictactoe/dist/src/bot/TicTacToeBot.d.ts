import EventHandler from './EventHandler';
import Config from '../config/Config';
import { Client, CommandInteraction, Message } from 'discord.js';
export default class TicTacToeBot {
    private readonly _configuration;
    private readonly _eventHandler;
    private readonly command;
    constructor(configuration: Config, eventHandler: EventHandler);
    get configuration(): Config;
    get eventHandler(): EventHandler;
    attachToClient(client: Client): void;
    handleMessage(message: Message): void;
    handleInteraction(interaction: CommandInteraction): void;
}
