import { ReduxElement } from 'c/lwcRedux';
import {increment, decrement, reset} from 'c/counterActions';

export default class Counter extends ReduxElement {
    mapStateToProp(state){
        return {counter: state.counter};
    }
    mapActionToProp(){
        return {increment, decrement, reset};
    }
}