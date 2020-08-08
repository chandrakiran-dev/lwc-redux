import {ADD_TODO, CHANGE_TODO_STATUS, STATUS} from 'c/todoAppConstant';

const initialState = {
    allIds: [],
    byIds: {}
};

const todo = (state = initialState, action) => {
    console.log(JSON.stringify(state));
    switch (action.type) {
       case ADD_TODO: 
        const { id, content } = action.payload;
        return {
            ...state,
            allIds: [...state.allIds, id],
            byIds: {
                ...state.byIds,
                [id]: {
                    content,
                    status: STATUS.INCOMPLETE
                }
            }
        };
       case CHANGE_TODO_STATUS: {
        const { id, status } = action.payload;
        return {
            ...state,
            byIds: {
              ...state.byIds,
              [id]: {
                ...state.byIds[id],
                status: status
              }
            }
          };
       }
        
       default: return state;
    }
}

export default todo;