import React from 'react';
import {Navbar, Nav, Brand} from 'react-bootstrap';
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
            src="./logo.png"
            width="280"
            height="80"
            className="d-inline-block align-top"
          />{' '}
          </Navbar.Brand>
          <div className="ml-auto">
            
              <Button className='button-1' variant="outline-secondary" ><Link to="/home">Home</Link></Button>{' '}
              <Button className='button-2' variant="outline-secondary" ><Link to="/favorites">My Favorites</Link></Button>{' '}
              <Button className='button-3' variant="outline-secondary" ><Link to="/songs">All Songs</Link></Button>{' '}
              <Button className='button-4' variant="outline-secondary"><Link to="/">Log In</Link></Button>{' '}
            
          </div>
      </Navbar>
    )
}

export default NavBar

