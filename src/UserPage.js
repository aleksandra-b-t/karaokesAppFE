import React from 'react';
import './UserPage.css';
import {Card} from 'react-bootstrap'
import FavList from './FavList'

const UserPage = () => {
    return(
        <div>
        <div>
            <p id='user-info'>SOME INFO ABOUT USER<br>
            </br>
            Name and some welcome message.</p>
        </div>
        <div> 
        
            <FavList />
            {/* <p id='user-fav'> Here are user's favorites songs !<br></br><br></br>
            <Card bg='dark' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Song Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Artist</Card.Subtitle>
                    <Card.Link href="#">Sing </Card.Link>
                    <Card.Link href="#">Remove</Card.Link>
                </Card.Body>
            </Card><br></br>
            <Card bg='dark' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Song Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Artist</Card.Subtitle>
                    <Card.Link href="#">Sing </Card.Link>
                    <Card.Link href="#">Remove</Card.Link>
                </Card.Body>
            </Card><br></br>
            <Card bg='dark' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Song Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Artist</Card.Subtitle>
                    <Card.Link href="#">Sing </Card.Link>
                    <Card.Link href="#">Remove</Card.Link>
                </Card.Body>
            </Card>
            </p> */}
           
        </div><br></br>
        <footer id='footer'> There's no half-singing in the shower, you're either a rock star or an opera diva. <address> - Josh Groban</address>  </footer>
        </div>
    )
}

export default UserPage