import {SELECT_SONG_ACTION} from 'c/songConstant';
export const selectSong = (song) =>{
    return {
        type: SELECT_SONG_ACTION,
        payload: song
    }
}