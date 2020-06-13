import {ReduxElement} from 'c/lwcRedux';

export default class SongList extends ReduxElement {
    mapStateToProps(state){
        return {songs: state.songs};
    }
}