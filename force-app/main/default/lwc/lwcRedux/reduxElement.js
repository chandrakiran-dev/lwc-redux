import { LightningElement, track} from 'lwc';
import {fireEvent} from './reduxHandler';
import {bindActionCreators} from './lwcRedux';
const getStore = () =>{
    return fireEvent('getStore', {});
}
const prepareProps = (thisArg, store) => {
    const state = thisArg.mapStateToProp(store.getState());
    return Object.assign({}, thisArg.props, state)
}

export default class ReduxElement extends LightningElement {
    @track props = {}
    unsubscribe;
    currentState;
    
    constructor(){
        super();
        const store = getStore();
        if(store){
            this.props = prepareProps(this, store);
            let actions = {};
            if(this.mapActionToProp)
                actions = this.mapActionToProp();
            this.props = Object.assign({}, this.props, bindActionCreators(actions, store.dispatch))
            this.unsubscribe = store.subscribe(this.handleChange.bind(this))
        }
    }
    parentDisconnectedCallback(){
        if(this.unsubscribe){
            this.unsubscribe();
        }
    }
    disconnectedCallback(){
        this.parentDisconnectedCallback();
    }

    forceUpdate(){
        const store = getStore();
        if(store){
            this.props = prepareProps(this, store);
        }
        this.props = Object.assign({}, this.props);
    }

    handleChange() {
        if(this.isUpdateRequired())
            this.forceUpdate()
    }
    isUpdateRequired(){
        let previousState = Object.assign({}, this.currentState);
        const store = getStore();
        if(store){
            this.currentState = store.getState()
        }
        let previousProp = this.mapStateToProp(previousState);
        let currentProp = this.mapStateToProp(this.currentState);

        for (let key in previousProp) {
            if (previousProp[key] !== currentProp[key]) {
                return true
            }
        }
        return false;
    }
}