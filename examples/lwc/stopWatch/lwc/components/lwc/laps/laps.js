import { ReduxElement } from 'c/lwcRedux';

export default class Laps extends ReduxElement {
    mapStateToProps(state){
        return {laps : state.laps};
    }
}