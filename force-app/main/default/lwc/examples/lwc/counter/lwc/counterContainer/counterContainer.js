import { LightningElement, api } from 'lwc';
import {createStore, combineReducers} from 'c/lwcRedux';
import reducers from 'c/counterReducers';
import {STORE_NAME} from 'c/counterConstant';

export default class CounterContainer extends LightningElement {
    @api store;
    storeName = STORE_NAME;
    initialize(){
        const combineReducersInstance = combineReducers(reducers);
        this.store = createStore(combineReducersInstance, this.logger);
    }
    logger({ getState }) {
        return next => action => {
            // eslint-disable-next-line no-console
            console.log('will dispatch', JSON.stringify(action))
            // Call the next dispatch method in the middleware chain.
            const returnValue = next(action)
            // eslint-disable-next-line no-console
            console.log('state after dispatch', JSON.stringify(getState()));
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue
        }
    }
}