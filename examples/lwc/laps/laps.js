import { LightningElement} from 'lwc';
import { Redux } from 'c/lwcRedux';

export default class Laps extends Redux(LightningElement) {
    mapStateToProps(state){
        return {laps : state.laps};
    }
}