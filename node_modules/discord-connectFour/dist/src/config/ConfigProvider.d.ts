import Config from './Config';
export default class ConfigProvider implements Config {
    token: string;
    language: string;
    command: string;
    commandOptionName: string;
    textCommand: undefined;
    allowedChannelIds: never[];
    allowedRoleIds: never[];
    requestExpireTime: number;
    requestCooldownTime: number;
    simultaneousGames: boolean;
    gameExpireTime: number;
    gameBoardReactions: boolean;
    gameBoardDelete: boolean;
    gameBoardEmojies: never[];
    gameBoardDisableButtons: boolean;
    [key: string]: any;
    private readonly CONFIG_PATH;
    constructor();
    private initializeFromFile;
    private initializeFromEnv;
    private static camelCase;
}
