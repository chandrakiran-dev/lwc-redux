import { ReduxElement } from 'c/lwcRedux';
import {VISIBILITY_FILTER} from 'c/todoAppConstant';
import {filter} from 'c/todoAppActions';
export default class TodoFilter extends ReduxElement {
    visibilityFilter = VISIBILITY_FILTER
    mapActionToProp(){
        return {setFilter : filter.setFilter}
    }
    handleClick(event){
        this.props.setFilter(event.target.value);
    }
}