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

export {ReduxElement, registerListener, unregisterAllListeners};

