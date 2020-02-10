import { ReduxElement } from 'c/lwcRedux';
import {STORE_NAME} from 'c/stopWatchConstant';

export default class Laps extends ReduxElement {
    mapStoreName(){
        return STORE_NAME;
    }
    mapStateToProp(state){
        return {laps : state.laps};
    }
}