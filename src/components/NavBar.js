import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './NavBar.css'
import {Link} from 'react-router-dom'
import { Route, Switch} from 'react-router'
const NavBar = () => {

    return(
        
    <Navbar className='nav-bar' bg="navyblue" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./mic0.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Karaoke
          </Navbar.Brand>
          <div className="ml-auto">
            
              <Button className='button-1' variant="outline-secondary" ><Link to="/user">My Account</Link></Button>{' '}
              <Button className='button-2' variant="outline-secondary" ><Link to="/favorites">My Favorites</Link></Button>{' '}
              <Button className='button-3' variant="outline-secondary" ><Link to="/songs">All Songs</Link></Button>{' '}
              <Button className='button-4' variant="outline-secondary"><Link to="/login">Log In</Link></Button>{' '}
            
          </div>
      </Navbar>
    )
}

export default NavBar

