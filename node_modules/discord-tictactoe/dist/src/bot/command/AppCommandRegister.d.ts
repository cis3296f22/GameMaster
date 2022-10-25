import { ApplicationCommandManager, Message } from 'discord.js';
export default class AppCommandRegister {
    private readonly commandManager;
    private readonly name;
    private readonly optionName;
    constructor(commandManager: ApplicationCommandManager, name: string, optionName: string);
    handleDeployMessage(message: Message): Promise<void>;
    private registerInGuild;
    private deleteInGuild;
}
