import { api } from 'lwc';
import { ReduxElement } from 'c/lwcRedux';
import { selectSong } from 'c/songActions';
import {STORE_NAME} from 'c/songConstant';
export default class SongCard extends ReduxElement {
    @api song={}
    mapStateToProp(state){
        return {selectedSong: state.selectedSong};
    }
    mapActionToProp(){
        return {selectSong};
    }
    mapStoreName(){
        return STORE_NAME;
    }
    handleClick(){
        this.props.selectSong(this.song);
    } 
    get getCardClass(){
        let strClass = 'song-card '
        if(this.props.selectedSong && this.song && this.song.title === this.props.selectedSong.title){
            strClass += 'selected ';
        }
        return strClass;
    }
}