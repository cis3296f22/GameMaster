"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOpponent = void 0;
function getOpponent(player) {
    if (player === 0) {
        return player;
    }
    else if (player === 1) {
        return 2;
    }
    else {
        return 1;
    }
}
exports.getOpponent = getOpponent;
