"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class ConfigProvider {
    constructor() {
        this.token = '';
        this.language = 'en';
        this.command = 'tictactoe';
        this.commandOptionName = 'opponent';
        this.textCommand = undefined;
        this.allowedChannelIds = [];
        this.allowedRoleIds = [];
        this.requestExpireTime = 60;
        this.requestCooldownTime = 0;
        this.simultaneousGames = false;
        this.gameExpireTime = 30;
        this.gameBoardReactions = false;
        this.gameBoardDelete = false;
        this.gameBoardEmojies = [];
        this.gameBoardDisableButtons = false;
        this.CONFIG_PATH = path_1.default.join(process.cwd(), 'config', 'config.json');
        this.initializeFromFile();
        this.initializeFromEnv();
    }
    initializeFromFile() {
        if (fs_1.default.existsSync(this.CONFIG_PATH)) {
            const savedConfig = require(this.CONFIG_PATH);
            Object.keys(savedConfig).forEach(field => {
                this[field] = savedConfig[field];
            });
        }
    }
    initializeFromEnv() {
        Object.keys(process.env)
            .filter(key => this[ConfigProvider.camelCase(key)] !== undefined)
            .forEach(key => {
            const camelCaseKey = ConfigProvider.camelCase(key);
            const value = process.env[key];
            let newValue;
            if (camelCaseKey === 'language')
                return;
            switch (typeof this[camelCaseKey]) {
                case 'number':
                    newValue = parseFloat(value);
                    break;
                case 'boolean':
                    newValue = value.toLowerCase() === 'true';
                    break;
                case 'string':
                case 'object':
                default:
                    newValue = value.toString();
                    if (Array.isArray(this[camelCaseKey])) {
                        newValue = newValue.split(',');
                    }
                    break;
            }
            if (newValue) {
                this[camelCaseKey] = newValue;
            }
        });
    }
    static camelCase(str) {
        return str.toLowerCase().replace(/_([a-z])/g, g => {
            return g[1].toUpperCase();
        });
    }
}
exports.default = ConfigProvider;
