import {SET_FILTER} from 'c/todoAppConstant';

export const setFilter = filter => ({ 
    type: SET_FILTER, 
    payload: { filter } 
});
