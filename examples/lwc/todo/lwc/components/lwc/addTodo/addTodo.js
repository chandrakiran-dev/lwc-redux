import { LightningElement, track} from 'lwc';
import { Redux } from 'c/lwcRedux';
import {todo} from 'c/todoAppActions';

export default class AddTodo extends Redux(LightningElement) {
    @track todoInput = '';
    mapDispatchToProps(){
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