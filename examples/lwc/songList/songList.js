import { LightningElement} from 'lwc';
import { Redux } from 'c/lwcRedux';

export default class SongList extends Redux(LightningElement) {
    mapStateToProps(state){
        return {songs: state.songs};
    }
}