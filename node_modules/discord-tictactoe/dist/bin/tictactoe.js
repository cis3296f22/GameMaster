#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigProvider_1 = __importDefault(require("../src/config/ConfigProvider"));
const src_1 = __importDefault(require("../src"));
new src_1.default(new ConfigProvider_1.default())
    .login()
    .then(() => console.log('TicTacToe module ready to be used. Check your Discord server!'));
