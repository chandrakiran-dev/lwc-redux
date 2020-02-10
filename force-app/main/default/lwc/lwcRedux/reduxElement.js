import { LightningElement, track} from 'lwc';
import {fireEvent} from './reduxHandler';
import {bindActionCreators} from './lwcRedux';
const getStore = (storeName) =>{
    const listener = fireEvent(storeName,'getStore', {});
    let store;
    try {
        store = listener.callback.call(listener.thisArg, {});
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
    }
    return store;
}
const prepareProps = (thisArg, store) => {
    const state = thisArg.mapStateToProp(store.getState());
    return Object.assign({}, thisArg.props, state)
}

export default class ReduxElement extends LightningElement {
    @track props = {}
    storeName;
    unsubscribe;
    currentState;
    storeName = this.mapStoreName();
    constructor(){
        super();
        const store = getStore(this.storeName);
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
        const store = getStore(this.storeName);
        if(store){
            this.props = prepareProps(this, store);
        }
        this.props = Object.assign({}, this.props);
    }

    handleChange() {
        //debugger;
        //if(this.isUpdateRequired())
            this.forceUpdate()
    }
    isUpdateRequired(){
        let previousState = Object.assign({}, this.currentState);
        const store = getStore(this.storeName);
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