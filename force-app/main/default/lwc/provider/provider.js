import { LightningElement, api , track} from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import reduxURL from '@salesforce/resourceUrl/redux';
import reduxThunkURL from '@salesforce/resourceUrl/reduxThunk';

import {registerListener, unregisterAllListeners} from 'c/lwcRedux';

export default class Provider extends LightningElement {
    @api _store;
    @track loadCompleted = false;
    @api 
    get store(){
        return this._store;
    }
    set store(value){
        if(value){
            this._store = value;
        }
    }
    async connectedCallback(){
        if(!window.Redux){
            await Promise.all([
                loadScript(this, reduxURL),
                loadScript(this, reduxThunkURL)
            ]);
            registerListener("getStore",this.getStore, this);
            this.loadCompleted = true;
        }
        this.dispatchEvent(new CustomEvent('init'));
    }

    getStore(){
        return this._store;
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
}