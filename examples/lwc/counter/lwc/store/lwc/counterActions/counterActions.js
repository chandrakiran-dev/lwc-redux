import {INCREMENT_ACTION, DECREMENT_ACTION, RESET_ACTION} from 'c/counterConstant';
export const increment = ()=> {
    return {
       type: INCREMENT_ACTION
    }
 }
 export const decrement = () => {
    return {
       type: DECREMENT_ACTION
    }
 }
 export const reset = () => {
    return { type: RESET_ACTION }
 }