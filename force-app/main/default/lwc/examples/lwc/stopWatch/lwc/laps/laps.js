import { ReduxElement } from 'c/lwcRedux';

export default class Laps extends ReduxElement {
    mapStateToProp(state){
        return {laps : state.laps};
    }
}