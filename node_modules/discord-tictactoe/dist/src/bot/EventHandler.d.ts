export declare type EventType = 'win' | 'tie';
export default class EventHandler {
    listeners: Map<EventType, Array<(data?: any) => void>>;
    constructor();
    registerListener(eventName: EventType, callback: (data?: any) => void): void;
    emitEvent(eventName: EventType, data?: any): void;
    private supportEvent;
}
