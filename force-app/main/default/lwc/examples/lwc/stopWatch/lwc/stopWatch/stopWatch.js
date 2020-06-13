import { ReduxElement } from 'c/lwcRedux';
import {start, stop, reset, createLap} from 'c/stopWatchAction';

export default class StopWatch extends ReduxElement {
    mapStateToProps(state){
        return {
            milliSec : this.checkTime(state.milliSec), 
            sec : this.checkTime(state.sec), 
            min: this.checkTime(state.min), 
            hour: this.checkTime(state.hour),
            interval: state.interval
        }
    }
    mapDispatchToProps(){
        return {start, stop, reset, createLap}
    }
    checkTime(time) {
        if (time < 10) {
            time = "0" + time;
        }
        return time;
    }
}