import React from 'react'
import ReactPlayer from "react-player"
import {Carousel, Navbar} from 'react-bootstrap'
import './Karaoke.css'



const choosen = (e) => {
    
    console.log(e.target)
    // return ( <ReactPlayer )
}
// let id = this.props.match.params.id



class Karaoke extends React.Component {
    state = {
        song: {},
        songs: []
    }

 id = this.props.match.params.id

componentDidMount(){
    fetch(`http://localhost:3000/songs/${this.id}`).then(r => r.json()).then(song => {this.setState({song})})
}
// componentDidMount(){
// fetch(`http://localhost:3000/songs`).then(r => r.json()).then(songs => {this.setState({songs})})
// }

render(){
    // let theSong = this.state.songs.find(song => {return song.id === this.props.match.params.id})
    // console.log(this.props.match.params.id)
    // console.log(this.state.songs)
    //console.log(this.state.song.youtubeId)
    const {youtubeId, id} = this.state.song
return(
    <div>
        <img src='/shine.png'  alt="letsing" id='sing'/>
        
        <ReactPlayer id='carouse-form'
                            url={`https://www.youtube.com/watch?v=${youtubeId}`}
                    />
        <div id='carouse-form' onClick={choosen}>
            {/* <p>You may also like: </p>
            <Carousel >
            {this.state.songs.map(song1 => 
                <Carousel.Item className='video'>
                <ReactPlayer
                        url={`https://www.youtube.com/watch?v=an0JKXnnrAY${song1.youtubeId}`}
                />
                <Carousel.Caption>
                <h3>{song1.title}</h3>
                <p>{song1.genre}</p>
                </Carousel.Caption>
                </Carousel.Item>
            )}
            </Carousel>  */}
        </div>
    </div>
    )
}
}

export default Karaoke