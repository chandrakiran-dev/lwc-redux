/**
 * This is lwc-redux component js file. This expose all the method that can be use in other components. 
 * 
 * @author : https://github.com/chandrakiran-dev
 */

import ReduxElement from './reduxElement';
import {registerListener, unregisterAllListeners} from './reduxHandler';
export const combineReducers = reducers => {
    return window.Redux.combineReducers(reducers);
}

export const createStore = (reducers, logger) => {
    let middleware;
    if(logger){ 
        middleware = window.Redux.applyMiddleware(window.ReduxThunk.default, logger);
    }else{
        middleware = window.Redux.applyMiddleware(window.ReduxThunk.default);
    }
    return window.Redux.createStore(reducers, middleware);
}

export const bindActionCreators = (actions, dispatch) => {
    return window.Redux.bindActionCreators(actions, dispatch);
}

const getStore = (thisArg, callback) =>{
    const eventStore = new CustomEvent('lwcredux__getstore', { bubbles: true,composed: true, detail : (store)=>{
        alert('Okk')
        callback(store);
    }})
    if(eventStore){
        thisArg.dispatchEvent(eventStore);
    }
}

export const Redux = (Superclass = Object) => {
    return ReduxElement
}

export {registerListener, unregisterAllListeners};

