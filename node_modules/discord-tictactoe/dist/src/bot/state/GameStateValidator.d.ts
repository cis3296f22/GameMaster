import MessagingTunnel from '../messaging/MessagingTunnel';
import GameStateManager from './GameStateManager';
import InteractionConfig from '../../config/InteractionConfig';
import { GuildMember } from 'discord.js';
export default class GameStateValidator {
    private static readonly PERM_LIST;
    private readonly manager;
    constructor(manager: GameStateManager);
    get config(): InteractionConfig;
    get cooldownEndTimes(): Map<string, number>;
    isInteractionValid(tunnel: MessagingTunnel): boolean;
    isNewGamePossible(tunnel: MessagingTunnel, invited?: GuildMember): boolean;
    private isMessagingAllowed;
    private hasPermissionsInChannel;
    private isMemberAllowed;
    private isMemberAllowedByRole;
    private isMemberAllowedByCooldown;
}
