import CommandConfig from './CommandConfig';
import GameConfig from './GameConfig';
import InteractionConfig from './InteractionConfig';
export default interface Config extends CommandConfig, GameConfig, InteractionConfig {
    token?: string;
    language?: string;
}
