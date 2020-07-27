import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './NavBar.css'

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
          <Nav.Link href="#link">Home</Nav.Link>
          <Nav.Link href="#link">Search</Nav.Link>
          <Nav.Link href="#link">Add Song</Nav.Link>
          
          <Button className='ml-auto' variant="outline-secondary" >Log In</Button>{' '}
      </Navbar>
    )
}

export default NavBar

