import {START_ACTION, STOP_ACTION, RESET_ACTION, TICK_ACTION, CREATE_LAP_ACTION} from 'c/stopWatchConstant';

let initialState = {
    milliSec : 0,
    sec : 0,
    min : 0,
    hour : 0,
    interval : undefined,
    laps : []
}


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case START_ACTION: 
            return {
                ...state,
                interval : action.payload.interval
            }
        case TICK_ACTION:{
            let tempState = {...state};
            tempState.milliSec = ++tempState.milliSec;
            if (tempState.milliSec === 100) {
                tempState.milliSec = 0;
                tempState.sec = ++tempState.sec;
            }
            
            if (tempState.sec === 60) {
                tempState.min = ++tempState.min;
                tempState.sec = 0;
            }
            
            if (tempState.min === 60) {
                tempState.min = 0;
                tempState.hour = ++tempState.hour;
            }
            return tempState;
        }
        case STOP_ACTION: {
            clearInterval(state.interval)
            return {
                ...state,
                interval: undefined
            }
        }
        case RESET_ACTION : {
            return initialState;
        }
        case CREATE_LAP_ACTION : {
            let tempLap = [...state.laps]
            tempLap.push({hour: state.hour, min: state.min, sec: state.sec, milliSec: state.milliSec});
            return {
                ...state,
                laps: tempLap
            }
        }
        default: return state;
    }
 }
export default reducers;