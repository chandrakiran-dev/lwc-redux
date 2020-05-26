import { track } from 'lwc';
import { ReduxElement } from 'c/lwcRedux';
import {todo} from 'c/todoAppActions';

export default class AddTodo extends ReduxElement {
    @track todoInput = '';
    mapActionToProp(){
        return {addTodo : todo.addTodo};
    }
    inputChange(event){
        this.todoInput = event.target.value;
    }
    handleClick(event){
        if(this.todoInput){
            this.props.addTodo(this.todoInput);
            this.todoInput = '';
        }
    }
}