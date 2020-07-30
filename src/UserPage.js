import React from 'react';
import './UserPage.css';
import { Route } from 'react-router-dom';
import {Button, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';

class UserPage extends  React.Component{
    state={
        name: '',
        passowrd: '',
        confirmation: '',
        renderEdit: false,
        deleteMe: false
    }
    toggleEdit = () => this.setState(prevState => ({ renderEdit: !prevState.renderEdit, password: '', name: '', confirmation: '' }))
    
    renderEditForm = () => {
        //  console.log("zmieniam")
        return(
        <div> 
            <form id='edit-form'>
            <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
            <input name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange}/>
            <input name="confirmation" placeholder="Confirm Password"  type="password" value={this.state.confirmation} onChange={this.handleChange}/>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        )
    }

    handleSubmit = e => {
        const { name, password, confirmation} = this.state;
            password === confirmation ? alert('Your profile is update!') : alert('Password do not match!')
            
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    toggleDelete = () => this.setState(prevState => ({ deleteMe: !prevState.deleteMe}))

    render(){
        let {renderEdit, deleteMe} = this.state;
        
        return(
            <div>
            <div>
                <p id='user-info'>SOME INFO ABOUT USER</p><br>
                </br><br></br>
                <p id='note'>It’s no secret that music has the power to evoke an emotional response within us, <br></br>
                but that’s particularly true with the act of performing music — singing, dancing, and drumming — 
                <br></br>which releases feel-good endorphins in a way that passive listening doesn’t. 
                <br></br>Karaoke, though, melds all the best chemical aspects of performing <br></br>
                with the anxiety of stage fright. <br></br><br></br>So why do we crowd into bars to sing familiar songs in front of strangers? <br></br>
                And why does it feel so good?</p>
            </div>
            <div> 
            <Button className='button-c' variant="outline-secondary" ><Link to="/songs">Start Sing !</Link></Button>{' '}
                <Button className='button-a' variant="outline-secondary" onClick={this.toggleEdit}>Edit my profile</Button>{' '}
                <Button className='button-b' variant="outline-secondary" onClick={this.toggleDelete}>Delete my profile</Button>{' '}
                
            </div>
            {renderEdit ? this.renderEditForm() : null}<br></br>
            {deleteMe ? alert('Are you sure?') : null}
            <footer id='footer'> There's no half-singing in the shower, you're either a rock star or an opera diva. <address> - Josh Groban</address>  </footer>
            </div>
        )
    }
}

export default UserPage