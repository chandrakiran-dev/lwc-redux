import { ReduxElement } from 'c/lwcRedux';

export default class TodoList extends ReduxElement {
    mapStateToProps(state){
        const { filter, todo } = state;
        let allIds;
        if(filter != 'All'){
            allIds = todo.allIds.filter(id => todo.byIds[id].status == filter)
        }else{
            allIds = todo.allIds
        }      
        return {allIds}
    }
    get hasRecord(){
        return this.props.allIds && this.props.allIds.length > 0
    }
}