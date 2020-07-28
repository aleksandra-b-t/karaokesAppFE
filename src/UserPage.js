import React from 'react';
import './UserPage.css';
import {Card} from 'react-bootstrap'
import SongsContainer from './SongsContainer'
import { Route } from 'react-router-dom';

const UserPage = () => {
    return(
        <div>
        <div>
            <p id='user-info'>SOME INFO ABOUT USER<br>
            </br>
            Name and some welcome message.</p>
        </div>
        <div> 
        <button>Start!</button>
        <Route path='/favorites'></Route>
        </div><br></br>
        <footer id='footer'> There's no half-singing in the shower, you're either a rock star or an opera diva. <address> - Josh Groban</address>  </footer>
        </div>
    )
}

export default UserPage