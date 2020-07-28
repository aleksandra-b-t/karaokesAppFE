import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import './FavList.css'

const FavList = () => {

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

    return(
        
        <ListGroup variant="dark" id='user-fav'>
            Here is your favorites songs!<br></br><br></br>
            {songs.map((song, index) => 
                <ListGroup.Item id='user-fav1'>
                {song.title} <br></br>{song.artist} <small>({song.genre})  </small>
                <button className='sing'>Sing!</button>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}

export default FavList