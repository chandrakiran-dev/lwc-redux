import { ReduxElement } from 'c/lwcRedux';
import {increment, decrement, reset} from 'c/counterActions';

export default class Counter extends ReduxElement {
    mapStateToProps(state){
        return {counter: state.counter};
    }
    mapDispatchToProps(){
        return {increment, decrement, reset};
    }
}