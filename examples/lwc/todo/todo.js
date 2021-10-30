import { LightningElement, api } from 'lwc';
import { Redux } from 'c/lwcRedux';
import {STATUS} from 'c/todoAppConstant';
import {todo} from 'c/todoAppActions';

export default class Todo extends Redux(LightningElement) {
    @api recordId;
    status = STATUS;
    mapStateToProps(state){
        return {record : state.todo.byIds[this.recordId]}
    }
    mapDispatchToProps(){
        return {changeTodoStatus : todo.changeTodoStatus};
    }
    handleStatusChange(event){
        this.props.changeTodoStatus(this.recordId, event.target.value);
    }

    get bodyClass(){
        let strClass = 'slds-m-top_medium slds-box slds-box_xx-small ';
        if(this.props.record.status == STATUS.INCOMPLETE){
            strClass += 'incomplete';
        }else if(this.props.record.status == STATUS.INPROGRESS){
            strClass += 'inprogress';
        }else if(this.props.record.status == STATUS.COMPLETED){
            strClass += 'completed';
        }
        return strClass;
    }
    get isCompleted(){
        return this.props.record.status == STATUS.COMPLETED
    }
}