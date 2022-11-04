"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessagingTunnel_1 = __importDefault(require("./MessagingTunnel"));
class CommandInteractionMessagingTunnel extends MessagingTunnel_1.default {
    constructor(interaction) {
        super();
        this.interaction = interaction;
    }
    get author() {
        return this.interaction.member;
    }
    get channel() {
        return this.interaction.channel;
    }
    get reply() {
        return this._reply;
    }
    replyWith(answer, direct) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.reply && this.interaction.deferred) {
                this._reply = (yield this.interaction.fetchReply());
            }
            if (this.reply) {
                yield this.editReply(answer);
                return this.reply;
            }
            this._reply = (yield this.interaction.reply(Object.assign(Object.assign({ components: [], embeds: [] }, answer), { ephemeral: direct, fetchReply: true })));
            return this._reply;
        });
    }
    editReply(answer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.reply) {
                yield this.interaction.editReply(answer);
            }
        });
    }
    end(reason) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.reply) {
                try {
                    yield this.editReply(reason);
                    yield this.reply.reactions.removeAll();
                }
                catch (_a) {
                }
            }
        });
    }
}
exports.default = CommandInteractionMessagingTunnel;
