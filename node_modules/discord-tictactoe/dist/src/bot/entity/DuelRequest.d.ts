import MessagingTunnel from '../messaging/MessagingTunnel';
import GameStateManager from '../state/GameStateManager';
import { GuildMember, Message, MessageOptions } from 'discord.js';
export default class DuelRequest {
    private static readonly REACTIONS;
    private readonly manager;
    private readonly invited;
    private readonly expireTime;
    private readonly useReactions;
    private tunnel;
    constructor(manager: GameStateManager, tunnel: MessagingTunnel, invited: GuildMember, expireTime?: number, useReactions?: boolean);
    get content(): MessageOptions;
    attachTo(message: Message): Promise<void>;
    private challengeButtonAnswered;
    private challengeEmojiAnswered;
    private challengeAnswered;
    private challengeExpired;
}
