"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventHandler {
    constructor() {
        this.listeners = new Map();
        this.supportEvent('win');
        this.supportEvent('tie');
    }
    registerListener(eventName, callback) {
        const array = this.listeners.get(eventName);
        if (array) {
            array.push(callback);
        }
        else {
            throw new Error(`Cannot register event "${eventName}" because it does not exist`);
        }
    }
    emitEvent(eventName, data) {
        var _a;
        (_a = this.listeners.get(eventName)) === null || _a === void 0 ? void 0 : _a.forEach(listener => listener(data));
    }
    supportEvent(eventName) {
        this.listeners.set(eventName, []);
    }
}
exports.default = EventHandler;
