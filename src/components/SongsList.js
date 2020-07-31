import React from "react";
import { ListGroup } from "react-bootstrap";
import "./SongsList.css";
import { withRouter } from 'react-router-dom'

class SongsList extends React.Component {
  state = {
    songsList: [],
    search: "",
  };


  constructor(props) {
    super()
  }
  componentDidMount() {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songsList) => {
        this.setState({ songsList });
      });
  }

  handleChange = (e) => this.setState({ search: e.target.value });

  handleSong = (id) => { this.props.history.push(`/songs/${id}`)}
  
//   const id = this.props.match.params.id
  
  addToFavorites = songId => {
    fetch("http://localhost:3000/favorites",
      {
        method: "POST",
        headers: { 
          "Authorization": localStorage.token,
          "Content-Type": "Application/json",
          "Accept": "Application/json"
        },
        body: JSON.stringify({
          user_id: this.props.user.id,
          song_id: songId
        })
      }
    )
    .then(res => console.log)
  }

  render() {
    let filteredSongs = this.state.songsList.filter((song) =>
      song.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <ListGroup variant="dark" id='song-list'>
        Here is list of available songs: <br></br>
        <br></br>
        <label>
          Search: 
          <input
            name="search"
            placeholder="Search song..."
            onChange={this.handleChange}
            value={this.state.search}
          />
        </label>
        <div id="song-card">
        {filteredSongs.map((song, index) => (
          <ListGroup.Item key={song.id} id="song-card1" >
               
            {song.title} <br></br>
            <small> ({song.genre}) </small>
            <button className="sing" onClick={() => this.handleSong(song.id)} >Sing!</button>{" "}
            <button className="fav" onClick={() => { this.addToFavorites(song.id) }} > Fav </button>
          </ListGroup.Item>
        ))}
        </div>
      </ListGroup>
    );
  }
}

export default withRouter(SongsList);
