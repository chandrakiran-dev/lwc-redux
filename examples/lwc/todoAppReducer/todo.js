import {ACTION_INITIALIZE_APP, ADD_TODO, CHANGE_TODO_STATUS, STATUS} from 'c/todoAppConstant';

const initialState = {
    allIds: [],
    byIds: {}
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_INITIALIZE_APP: {
            const payload = action.payload;
            const allIds = Object.keys(payload) || [];
            return {
                ...state,
                allIds: [...allIds],
                byIds: {...payload}
            };
        }
        case ADD_TODO: {
            const payload = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, payload.id],
                byIds: {
                    ...state.byIds,
                    [payload.id]: {...payload}
                }
            };
        }
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