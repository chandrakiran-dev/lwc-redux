const songReducer = (songs=null) => {
    if(songs == null){
        songs = [
            {title: 'Sorry, Blame it on Me ', duration: '4:30'},
            {title: 'Lonely', duration: '5:10'},
            {title: 'Smack That', duration: '1:45'}
        ]
    }
    return songs;
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SELECT_SONG'){
        return action.payload;
    }
    return selectedSong;
}

export default {
    songs: songReducer,
    selectedSong: selectedSongReducer
}