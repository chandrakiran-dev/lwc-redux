import { api } from 'lwc';
import { ReduxElement } from 'c/lwcRedux';
import { selectSong } from 'c/songActions';
export default class SongCard extends ReduxElement {
    @api song={}
    mapStateToProps(state){
        return {selectedSong: state.selectedSong};
    }
    mapDispatchToProps(){
        return {selectSong};
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