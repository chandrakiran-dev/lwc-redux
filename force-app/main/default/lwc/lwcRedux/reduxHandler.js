const reduxEvent = [];
export const registerListener = (eventName, callback, thisArg) => {
    if (!reduxEvent[eventName]) {
        reduxEvent[eventName] = [];
    }
    reduxEvent[eventName] = { callback, thisArg};
};

export const unregisterListener = (eventName) => {
    if (reduxEvent[eventName]) {
        delete reduxEvent[eventName]
    }
};

export const unregisterAllListeners = () => {
    Object.keys(reduxEvent).forEach(eventName => {
        reduxEvent[eventName] = []
    });
};

export const fireEvent = (eventName, payload) => {
    if (reduxEvent[eventName]) {
        const listener = reduxEvent[eventName];
        try {
            return listener.callback.call(listener.thisArg, payload);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Error ->', error);
        }
    }
    return undefined; 
};