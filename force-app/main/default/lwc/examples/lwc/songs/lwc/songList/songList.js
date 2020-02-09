import {ReduxElement} from 'c/lwcRedux';
import {STORE_NAME} from 'c/songConstant';

export default class SongList extends ReduxElement {
    mapStateToProp(state){
        return {songs: state.songs};
    }
    mapStoreName(){
        return STORE_NAME;
    }
    
}