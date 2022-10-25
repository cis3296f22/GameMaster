export default interface InteractionConfig {
    allowedChannelIds?: string[];
    allowedRoleIds?: string[];
    requestCooldownTime?: number;
    requestExpireTime?: number;
    requestReactions?: boolean;
    simultaneousGames?: boolean;
}
