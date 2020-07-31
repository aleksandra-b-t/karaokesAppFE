import React from 'react'
import SongsList from './components/SongsList';
import { Row, Col }  from 'react-bootstrap';


const SongsContainer = (props) => {
    
    return(
        <div>
            <Row>
                <Col md={{ span: 4, offset: 1 }}><SongsList user={ props.user } /></Col>
            </Row>
        </div>
    )

}

export default SongsContainer