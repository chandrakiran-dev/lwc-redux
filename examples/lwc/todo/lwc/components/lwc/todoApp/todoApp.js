import { LightningElement } from 'lwc';
import { Redux } from 'c/lwcRedux';
import {todo} from 'c/todoAppActions';

export default class TodoApp extends Redux(LightningElement) {
    connectedCallback(){
        super.connectedCallback();
        this.props.initialize();
    }
    mapDispatchToProps(){
        return {initialize : todo.initialize};
    }
}