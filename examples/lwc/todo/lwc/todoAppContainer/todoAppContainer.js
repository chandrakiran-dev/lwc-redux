import { LightningElement, api } from 'lwc';
import {createStore, combineReducers, createLogger} from 'c/lwcRedux';
import reducers from 'c/todoAppReducer';
export default class TodoAppContainer extends LightningElement {
    @api store;
    initialize(){
        const logger = createLogger({
            duration: true,
            diff: true
        });
        const combineReducersInstance = combineReducers(reducers);
        this.store = createStore(combineReducersInstance, logger);
    }
}