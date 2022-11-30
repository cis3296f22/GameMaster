"use strict"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const AI = require('./node_modules/discord-tictactoe/dist/src/tictactoe/AI');
const Game = require('./node_modules/discord-tictactoe/dist/src/tictactoe/Game');

let error = console.error;

console.error = function (message) {
    error.apply(console, arguments);
    throw (message instanceof Error ? message : new Error(message));
}

const ai = new AI.default();
const game = new Game.default();

test('create AI', () => {
   expect(ai instanceof AI.default).toBe(true);
});

test('recognize top left', () => {
    game.setBoard = [0, 0, 0,
        0, 1, 0,
        0, 0, 1];
    expect(ai.operate(game)).toBe(0);
});

test('recognize top middle', () => {
    game.board = [0, 0, 0,
        0, 1, 0,
        0, 1, 0];
    expect(ai.operate(game)).toBe(1);
});

test('recognize top right', () => {
    game.board = [0, 0, 0,
        0, 1, 0,
        1, 0, 0];
    expect(ai.operate(game)).toBe(2);
});

test('recognize middle left', () => {
    game.board = [0, 0, 0,
        0, 1, 1,
        0, 0, 0];
    expect(ai.operate(game)).toBe(3);
});

test('recognize middle right', () => {
    game.board = [0, 0, 0,
        1, 1, 0,
        0, 0, 0];
    expect(ai.operate(game)).toBe(5);
});

test('recognize bottom left across', () => {
    game.board = [0, 0, 0,
        0, 0, 0,
        0, 1, 1];
    expect(ai.operate(game)).toBe(6);
});

test('recognize bottom left down', () => {
    game.board = [1, 0, 0,
        1, 0, 0,
        0, 0, 0];
    expect(ai.operate(game)).toBe(6);
});

test('recognize bottom left diagonal', () => {
    game.board = [0, 0, 1,
        0, 1, 0,
        0, 0, 0];
    expect(ai.operate(game)).toBe(6);
});

test('recognize bottom middle', () => {
    game.board = [0, 1, 0,
        0, 1, 0,
        0, 0, 0];
    expect(ai.operate(game)).toBe(7);
});

test('recognize bottom right', () => {
    game.board = [1, 0, 0,
        0, 1, 0,
        0, 0, 0];
    expect(ai.operate(game)).toBe(8);
});

test('recognize bottom right', () => {
    game.board = [0, 0, 1,
        0, 0, 1,
        0, 0, 0];
    expect(ai.operate(game)).toBe(8);
});

test('recognize bottom right', () => {
    game.board = [0, 0, 0,
        0, 0, 0,
        1, 1, 0];
    expect(ai.operate(game)).toBe(8);
});