import React from 'react';
import './UserPage.css';
import {Button } from 'react-bootstrap';
import { Link}  from 'react-router-dom'

class UserPage extends  React.Component{


    constructor(props) {
        super();
    }

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

    deleteAccount = () => {
        const deleteAccount = window.confirm("Are you sure?")
        if (deleteAccount) {
            fetch(`http://localhost:3000/users/${this.props.user.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": localStorage.token,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then(this.props.history.push("/login"))
            .catch(err => console.log);
            localStorage.clear("token");
        }
    }

    handleSubmit = e => {
        const { password, confirmation} = this.state;
            password === confirmation ? alert('Your profile is update!') : alert('Password do not match!')
            
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    toggleDelete = () => this.setState(prevState => ({ deleteMe: !prevState.deleteMe}))

    render(){
        let {renderEdit, deleteMe} = this.state;
        return(
            <div>
            <div>
                {
                    this.props.user &&
                        <p id='user-info'>Welcolme {this.props.user.name}</p>   
                }
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
                <Button className='button-b' variant="outline-secondary" onClick={this.deleteAccount}>Delete my profile</Button>{' '}
                
            </div>
            {renderEdit ? this.renderEditForm() : null}<br></br>
            {deleteMe ? this.deleteAccount : null}
            <footer id='footer'> There's no half-singing in the shower, you're either a rock star or an opera diva. <address> - Josh Groban</address>  </footer>
            </div>
        )
    }
}

export default UserPage