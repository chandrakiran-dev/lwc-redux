/**
 * This file contains the ReduxElement that extends the LightningElement. This will be the parent component for all redux component
 * 
 * @author : https://github.com/chandrakiran-dev
 */

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
    if(thisArg.mapStateToProps){
        const state = thisArg.mapStateToProps(store.getState());
        return Object.assign({}, thisArg.props, state)
    }
    return thisArg.props;
}

export default class ReduxElement extends LightningElement {
    @track props = {}
    unsubscribe;
    connectedCallback(){
        getStore(this, (store) => {
            if(store){
                this.props = prepareProps(this, store);
                let actions = {};
                if(this.mapDispatchToProps){
                    actions = this.mapDispatchToProps();
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