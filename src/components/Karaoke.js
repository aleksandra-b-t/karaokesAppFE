import React from 'react'
import ReactPlayer from "react-player"
import {Carousel} from 'react-bootstrap'
import './Karaoke.css'

const choosen = (e) => {
    
    console.log(e.target)
    // return ( <ReactPlayer )
}
// let id = this.props.match.params.id



class Karaoke extends React.Component {
    state = {
        song: {}
    }

 id = this.props.match.params.id

componentDidMount(){
    fetch(`http://localhost:3000/songs/${this.id}`).then(r => r.json()).then(song => {this.setState({song})})
}


render(){
    // let theSong = this.state.songs.find(song => {return song.id === this.props.match.params.id})
    // console.log(this.props.match.params.id)
    // console.log(this.state.songs)
    console.log(this.state.song.youtubeId)
    const {youtubeId} = this.state.song
return(
    <div>
        <ReactPlayer id='carouse-form'
                            url={`https://www.youtube.com/watch?v=${youtubeId}`}
                    />
        <div id='carouse-form' onClick={choosen}>
            <p>You may also like: </p>
            {/* <Carousel >
                <Carousel.Item className='video'>
                    <ReactPlayer
                            url="https://www.youtube.com/watch?v=an0JKXnnrAY"
                    />
                    <Carousel.Caption>
                    <h3>Dance Monkey</h3>
                    <p>Tones $ I</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='video'>
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=VHpK1i6XnkY"
                    />

                    <Carousel.Caption>
                    <h3>Back to December</h3>
                    <p>Taylor Swift</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='video'>
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=bhGqtMsp0-w"
                    />

                        <Carousel.Caption>
                        <h3>Stay</h3>
                        <p>Rhianna & Mikki Ekko</p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    </div>
    )
}
}

export default Karaoke