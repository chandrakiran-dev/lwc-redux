import { LightningElement, track} from 'lwc';
import {bindActionCreators} from './lwcRedux';
const getStore = (thisArg, callback) =>{
    const eventStore = new CustomEvent('lwcredux__getstore', { bubbles: true,composed: true, detail : (store)=>{
        callback(store);
    }})
    if(eventStore){
        thisArg.dispatchEvent(eventStore);
    }
}
const prepareProps = (thisArg, store) => {
    if(thisArg.mapStateToProp){
        const state = thisArg.mapStateToProp(store.getState());
        return Object.assign({}, thisArg.props, state)
    }
    return thisArg.props;
}

export default class ReduxElement extends LightningElement {
    @track props = {}
    unsubscribe;
    currentState;
    connectedCallback(){
        getStore(this, (store) => {
            if(store){
                this.props = prepareProps(this, store);
                let actions = {};
                if(this.mapActionToProp){
                    actions = this.mapActionToProp();
                }   
                this.props = Object.assign({}, this.props, bindActionCreators(actions, store.dispatch))
                this.unsubscribe = store.subscribe(this.handleChange.bind(this))
            }
        })
    }

    disconnectedCallback(){
        if(this.unsubscribe){
            this.unsubscribe();
        }
    }

    forceUpdate(){
        getStore(this, (store) => {
            if(store){
                this.props = prepareProps(this, store);
            }
        })
        this.props = Object.assign({}, this.props);
    }

    handleChange() {
        this.forceUpdate()
    }
}