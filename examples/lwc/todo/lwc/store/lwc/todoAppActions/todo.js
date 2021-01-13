import {
  ACTION_INITIALIZE_APP,
  ADD_TODO, 
  CHANGE_TODO_STATUS,
  STATUS
} from 'c/todoAppConstant';
import initialLoad from '@salesforce/apex/TodoCC.initialLoad';
import addNewTodo from '@salesforce/apex/TodoCC.addNewTodo';
import changeStatus from '@salesforce/apex/TodoCC.changeTodoStatus';

let nextTodoId = 0;

export const initialize = () => {
  return dispatch => {
      initialLoad()
          .then(result => {
            dispatch({
                type:ACTION_INITIALIZE_APP,
                payload: JSON.parse(JSON.stringify(result))
            });
          })
          .catch(error => {
              console.error(error);
          });
  }
}

export const addTodo = content => {
  return (dispatch, getState) => {
    addNewTodo({content: content})
        .then(result => {
          dispatch({
              type:ADD_TODO,
              payload: JSON.parse(JSON.stringify(result))
          });
        })
        .catch(error => {
            console.error(error);
        });
  }
}
export const changeTodoStatus = (id, status )=> {
  return (dispatch, getState) => {
    const todo = getState().todo.byIds[id];
    todo.status = status;
    changeStatus({strTodo: JSON.stringify(todo)})
        .then(result => {
          dispatch({
              type: CHANGE_TODO_STATUS,
              payload: { id, status }
          });
        })
        .catch(error => {
            console.error(error);
        });
  }
}