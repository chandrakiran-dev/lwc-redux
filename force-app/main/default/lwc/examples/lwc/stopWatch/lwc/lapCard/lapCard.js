import { LightningElement, api, track } from 'lwc';

export default class LapCard extends LightningElement {
    @api index;
    @track lapToShow;
    _lap;
    @api
    get lap(){
        return this._lap;
    }
    set lap(value){
        this._lap = value;
        this.lapToShow = this.checkTime(value.hour) + ' : ' + this.checkTime(value.min) + ' : ' + this.checkTime(value.sec) + ' : ' + this.checkTime(value.milliSec);
    }
    checkTime(time) {
        if (time < 10) {
            time = "0" + time;
        }
        return time;
    }

}