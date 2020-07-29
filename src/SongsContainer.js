import React from 'react'
import SongsList from './components/SongsList'
import FavList from './components/FavList'
import {Row,Col} from 'react-bootstrap'


const SongsContainer = () => {
    
    return(
        <div>
            <Row>
                <Col md={{ span: 4, offset: 1 }}><SongsList /></Col>
            </Row>
        </div>
    )

}

export default SongsContainer