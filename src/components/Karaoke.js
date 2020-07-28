import React from 'react'
import ReactPlayer from "react-player"
import {Carousel} from 'react-bootstrap'
import './Karaoke.css'

const choosen = (e) => {
    
    console.log(e.target)
    // return ( <ReactPlayer )
}


const Karaoke = () => {

return(
    <div>
        <ReactPlayer id='carouse-form'
                            url="https://www.youtube.com/watch?v=an0JKXnnrAY"
                    />
        <div id='carouse-form' onClick={choosen}>
            <Carousel >
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
            </Carousel>
        </div>
    </div>
    )
}

export default Karaoke