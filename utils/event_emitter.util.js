import EventEmitter from 'events';
let eventEmitter;

export default {
    init: () => {
        eventEmitter = new EventEmitter();
        return eventEmitter;
    },
    getInstance: () => {
        if (!eventEmitter) {
            throw new Error('Event Emitter not initialized');
        }
        return eventEmitter;
    }
};