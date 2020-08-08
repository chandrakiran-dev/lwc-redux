import {ADD_TODO, CHANGE_TODO_STATUS} from 'c/todoAppConstant';
let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const changeTodoStatus = (id, status )=> ({
  type: CHANGE_TODO_STATUS,
  payload: { id, status }
});