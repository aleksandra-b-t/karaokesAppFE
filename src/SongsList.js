import React from 'react';
import ReactPlayer from "react-player"
import {Card, Accordion, Button, ListGroup} from 'react-bootstrap'
import './SongsList.css'

let songs = [
    {
        title: 'Someone You loved' ,
        genre: 'pop',
        artist: 'Lewis Capaldi',
        url: 'https://www.youtube.com/watch?v=0H3KpRuwBZ8'
    },
    {
        title: 'Big Girls Do not Cry' ,
        genre: 'hip-hop',
        artist: 'Fergie',
        url: 'https://www.youtube.com/watch?v=0H3KpRuwBZ8'
    },
    {
        title: 'Perfect' ,
        genre: 'rock',
        artist: 'Ed Sheeran',
        url: 'https://www.youtube.com/watch?v=sPMA1tqWuf4'
    },
    {
        title: 'All is found' ,
        genre: 'kids movie',
        artist: 'Frozen II',
        url: 'https://www.youtube.com/watch?v=KxZoKkjTSys'
    },
    {
        title: 'Everything i wanted' ,
        genre: 'pop',
        artist: 'Billie Eili',
        url: 'https://www.youtube.com/watch?v=0H3KpRuwBZ8'
    },
] 

const SongsList = () => {
    return(
        <ListGroup variant="dark" id='song-card'>
            Here is list of available songs: <br></br><br></br>
            {songs.map((song, index) => 
                <ListGroup.Item id='song-card1'>
                {song.title} <br></br>
                <small>{song.artist} ({song.genre})  </small>
                <button className='sing'>Sing!</button> <button className='fav'> Fav </button>
                </ListGroup.Item>
            )}
        </ListGroup>
        
    )
}

export default SongsList