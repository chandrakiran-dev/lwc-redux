import {SET_FILTER, VISIBILITY_FILTER} from 'c/todoAppConstant';

const initialState = VISIBILITY_FILTER.ALL;

const filter = (state = initialState, action) => {
    switch (action.type) {
       case SET_FILTER: return state;
       default: return state;
    }
}

export default filter;