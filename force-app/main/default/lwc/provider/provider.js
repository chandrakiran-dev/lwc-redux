/**
 * THis is provider component that's load the redux library. This will be tom most component for the lwc-redux application.
 * 
 * @author : https://github.com/chandrakiran-dev
 */

import { LightningElement, api , track} from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import reduxURL from '@salesforce/resourceUrl/redux';
import reduxThunkURL from '@salesforce/resourceUrl/reduxThunk';

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
            
        }
        this.template.addEventListener('lwcredux__getstore', this.handleGetStore.bind(this));
        this.dispatchEvent(new CustomEvent('init'));
        setTimeout(() =>{
            this.loadCompleted = true;
        })
    }
    handleGetStore(event){
        let callback = event.detail
        callback(this._store);
    }
    getStore(){
        return this._store;
    }
}