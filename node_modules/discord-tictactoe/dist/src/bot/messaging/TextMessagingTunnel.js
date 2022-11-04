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
class TextMessagingTunnel extends MessagingTunnel_1.default {
    constructor(origin) {
        super();
        this.origin = origin;
    }
    get author() {
        return this.origin.member;
    }
    get channel() {
        return this.origin.channel;
    }
    get reply() {
        return this._reply;
    }
    replyWith(answer, direct) {
        return __awaiter(this, void 0, void 0, function* () {
            if (direct) {
                this._reply = yield this.origin.reply(answer);
            }
            else {
                this._reply = yield this.origin.channel.send(answer);
            }
            return this._reply;
        });
    }
    editReply(answer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.reply) {
                yield this.reply.edit(answer);
            }
        });
    }
    end(reason) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.reply) {
                if (this.reply.deletable) {
                    try {
                        yield this.reply.delete();
                    }
                    catch (_a) {
                    }
                }
                yield this.channel.send(reason);
                this._reply = undefined;
            }
        });
    }
}
exports.default = TextMessagingTunnel;
