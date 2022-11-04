"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppCommandRegister_1 = __importDefault(require("./command/AppCommandRegister"));
const GameCommand_1 = __importDefault(require("./command/GameCommand"));
const GameStateManager_1 = __importDefault(require("./state/GameStateManager"));
class TicTacToeBot {
    constructor(configuration, eventHandler) {
        this._configuration = configuration;
        this._eventHandler = eventHandler;
        this.command = new GameCommand_1.default(new GameStateManager_1.default(this));
    }
    get configuration() {
        return this._configuration;
    }
    get eventHandler() {
        return this._eventHandler;
    }
    attachToClient(client) {
        const onReady = () => {
            var _a;
            if (client.application && this.configuration.command) {
                const register = new AppCommandRegister_1.default(client.application.commands, this.configuration.command, (_a = this.configuration.commandOptionName) !== null && _a !== void 0 ? _a : 'opponent');
                client.on('messageCreate', register.handleDeployMessage.bind(register));
                client.on('interactionCreate', this.command.handleInteraction.bind(this.command));
            }
            if (this.configuration.textCommand) {
                client.on('messageCreate', this.command.handleMessage.bind(this.command));
            }
        };
        if (client.readyAt) {
            onReady();
        }
        else {
            client.on('ready', onReady.bind(this));
        }
    }
    handleMessage(message) {
        this.command.handleMessage(message, true);
    }
    handleInteraction(interaction) {
        this.command.handleInteraction(interaction, true);
    }
}
exports.default = TicTacToeBot;
