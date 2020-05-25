import {ADD_TODO, CHANGE_TODO_STATUS} from 'c/todoAppConstant';

const initialState = {
    allIds: [],
    byIds: {}
};

const todo = (state = initialState, action) => {
    switch (action.type) {
       case ADD_TODO: return state;
       case CHANGE_TODO_STATUS: return state;
       default: return state;
    }
}

export default todo;