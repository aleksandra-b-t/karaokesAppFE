import React from 'react'
import { ListGroup } from 'react-bootstrap'
import './FavList.css'
import { withRouter } from 'react-router-dom'

class FavList extends React.Component {
    state = {
        search: '',
        songs: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/favorites", {
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(res => res.json())
        .then(songs => this.setState({songs: songs}))
    }
    
    handleChange = (e) => this.setState({ search: e.target.value });
    handleSong = (id) => { this.props.history.push(`/songs/${id}`)}

    render() {
        let filteredSongs = this.state.songs.filter((song) => 
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
                    {filteredSongs
                        .map((song, index) => 
                        <ListGroup.Item key={song.id} id='user-fav1'>
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