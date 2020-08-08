import {START_ACTION, STOP_ACTION, RESET_ACTION, TICK_ACTION, CREATE_LAP_ACTION} from 'c/stopWatchConstant';

let initialLapData = {
    milliSec : 0,
    sec : 0,
    min : 0,
    hour : 0
}

let initialState = {
    milliSec : 0,
    sec : 0,
    min : 0,
    hour : 0,
    interval : undefined,
    laps : [],
    lapData : initialLapData
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
            tempState.lapData.milliSec = ++tempState.lapData.milliSec
            if (tempState.milliSec === 100) {
                tempState.milliSec = 0;
                tempState.sec = ++tempState.sec;
            }
            if (tempState.lapData.milliSec === 100) {
                tempState.lapData.milliSec = 0;
                tempState.lapData.sec = ++tempState.lapData.sec;
            }

            if (tempState.sec === 60) {
                tempState.min = ++tempState.min;
                tempState.sec = 0;
            }
            if (tempState.lapData.sec === 60) {
                tempState.lapData.min = ++tempState.lapData.min;
                tempState.lapData.sec = 0;
            }
            
            if (tempState.min === 60) {
                tempState.min = 0;
                tempState.hour = ++tempState.hour;
            }
            if (tempState.lapData.min === 60) {
                tempState.lapData.min = 0;
                tempState.lapData.hour = ++tempState.lapData.hour;
            }
            return JSON.parse(JSON.stringify(tempState));
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
            tempLap.unshift({hour: state.lapData.hour, min: state.lapData.min, sec: state.lapData.sec, milliSec: state.lapData.milliSec});
            return {
                ...state,
                laps: tempLap,
                lapData: initialLapData
            }
        }
        default: return state;
    }
 }
export default reducers;