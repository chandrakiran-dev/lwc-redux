import {START_ACTION,TICK_ACTION, STOP_ACTION, RESET_ACTION, CREATE_LAP_ACTION} from 'c/stopWatchConstant';
export const start = ()=> {

    return dispatch => {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        const interval = setInterval(() => {
            dispatch({
                type:TICK_ACTION
            })
        }, 10);
        dispatch({
            type:START_ACTION,
            payload: {interval}
        })

    }
 }
 export const stop = () => {
    return {
       type: STOP_ACTION
    }
 }
 export const reset = () => {
    return { 
        type: RESET_ACTION 
    }
 }
 export const createLap = () => {
     return {
        type: CREATE_LAP_ACTION 
     }
 }