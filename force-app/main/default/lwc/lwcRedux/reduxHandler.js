/**
 * This file contains the all the helper method for the LWC-redux
 * 
 * @author : https://github.com/chandrakiran-dev
 */

const reduxEvent = [];
export const registerListener = (eventName, callback, thisArg) => {
    if (!reduxEvent[eventName]) {
        reduxEvent[eventName] = [];
    }
    const duplicate = reduxEvent[eventName].find(listener => {
        return listener.callback === callback && listener.thisArg === thisArg;
    });
    if (!duplicate) {
        reduxEvent[eventName].push({ callback, thisArg});
    }
};

export const unregisterListener = (eventName, callback, thisArg) => {
    if (reduxEvent[eventName]) {
        reduxEvent[eventName] = reduxEvent[eventName].filter(
            listener =>
                listener.callback !== callback || listener.thisArg !== thisArg
        );
    }
};

export const unregisterAllListeners = (thisArg) => {
    Object.keys(reduxEvent).forEach(eventName => {
        reduxEvent[eventName] = reduxEvent[eventName].filter(
            listener => listener.thisArg !== thisArg
        );
    });
};

export const fireEvent = (storeName,eventName) => {
    if (reduxEvent[eventName]) {
        const listeners = reduxEvent[eventName];
        let listenerToReturn;
        listeners.forEach(listener => {
            if (storeName === listener.thisArg.storeName){
                listenerToReturn = listener;
            }

        });
        return listenerToReturn;
    }
    return undefined; 
};