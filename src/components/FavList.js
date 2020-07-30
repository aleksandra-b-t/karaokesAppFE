import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import './FavList.css'
import { render } from '@testing-library/react'
import { withRouter } from 'react-router-dom'

class FavList extends React.Component {
    state = {
        search: ''
    }

    songs = [
        {
            id: 1,
            title: 'Someone You loved' ,
            genre: 'pop',
            artist: 'Lewis Capaldi',
            url: 'https://www.youtube.com/watch?v=0H3KpRuwBZ8'
        },
        {
            id: 5,
            title: 'Big Girls Do not Cry' ,
            genre: 'hip-hop',
            artist: 'Fergie',
            url: 'https://www.youtube.com/watch?v=0H3KpRuwBZ8'
        },
        {
            id: 2,
            title: 'Perfect' ,
            genre: 'rock',
            artist: 'Ed Sheeran',
            url: 'https://www.youtube.com/watch?v=sPMA1tqWuf4'
        },
        {
            id: 3,
            title: 'All is found' ,
            genre: 'kids movie',
            artist: 'Frozen II',
            url: 'https://www.youtube.com/watch?v=KxZoKkjTSys'
        },
        {
            id: 4,
            title: 'Everything i wanted' ,
            genre: 'pop',
            artist: 'Billie Eili',
            url: 'https://www.youtube.com/watch?v=0H3KpRuwBZ8'
        },
        
    
    ] 
    
    handleChange = (e) => this.setState({ search: e.target.value });
    handleSong = (id) => { this.props.history.push(`/songs/${id}`)}

    render() {
        let filteredSongs = this.songs.filter((song) =>
      song.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
        return(
            
            <ListGroup variant="dark" id='user-fav'><br></br><br></br>
                Here is your a list of your favorites songs!<br></br><br></br>
                <label>
                    Search: 
                        <input
                            name="search"
                            placeholder="Search song..."
                            onChange={this.handleChange}
                            value={this.state.search}
                        />
                        </label><br></br>
                <div id="song-card2">
                {filteredSongs.map((song, index) => 
                    <ListGroup.Item id='user-fav1'>
                    {song.title} <small>({song.genre})  </small>
                    <button className='sing' onClick={() => this.handleSong(song.id)} >Sing!</button>
                    </ListGroup.Item>
                )}
                </div>
            </ListGroup>
        )
    }
}

export default withRouter(FavList);