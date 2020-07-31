import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = props => {
  console.log(props);
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
            
              { props.user && 
                <>
                  <Button className='button-1' variant="outline-secondary" ><Link to={`/user/${props.user.id}`}>Home</Link></Button>
                  <Button className='button-2' variant="outline-secondary" ><Link to="/favorites">My Favorites</Link></Button>
                  <Button className='button-3' variant="outline-secondary" ><Link to="/songs">All Songs</Link></Button>
                </>
              }
              {
                props.user ? 
                  <Button onClick={ props.logout } className='button-4' variant="outline-secondary">Log Out</Button>:
                  <Button className='button-4' variant="outline-secondary"><Link to="/">Log In</Link></Button>
              }
          </div>
      </Navbar>
    )
}

export default NavBar

