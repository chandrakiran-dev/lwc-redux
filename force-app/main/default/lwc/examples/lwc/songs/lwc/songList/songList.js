import {ReduxElement} from 'c/lwcRedux';

export default class SongList extends ReduxElement {
    mapStateToProp(state){
        return {songs: state.songs};
    }
}