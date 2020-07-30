import React from 'react';
import { Form, Col, Card } from 'react-bootstrap';
//import './App.css';
//import logInBackground from '/logInBackground.jpg'
import './LogIn.css'

class LogIn extends React.Component {

    state= {
        isNewUser: false,
        name: '',
        password: '',
        confirmation: '',
    }

    toggleNewUser = () => this.setState(prevState => ({ isNewUser: !prevState.isNewUser, password: '', name: '', confirmation: '' }))
    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        const { isNewUser, password, confirmation} = this.state;
        isNewUser 
        ? password === confirmation ? this.props.history.push('/songs') : alert('try again!')
            : this.props.history.push('/songs')
    }

    renderLogin = () => {
        const { name, password } = this.state;
        return (
            <div id="simple-flex-col">
                <input name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
                <input name="password" placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
            </div>
        )
    }
    renderSignup = () => {
        const { password, name, confirmation } = this.state;
        return (
            <div id="simple-flex-col">
                <input name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
                <input name="password" placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
                <input name="confirmation" placeholder="Confirm Password"  type="password" value={confirmation} onChange={this.handleChange}/>
            </div>
        )
    }
    
    
    
    
    render(){
        let { isNewUser } = this.state;
        return (
            <div className="simple-flex-col">
                <h3>{isNewUser ? 'Sign Up' : 'Login'}</h3>
                { isNewUser ? this.renderSignup() : this.renderLogin() }
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                <div onClick={this.toggleNewUser}>{isNewUser ? "Login Instead" : "Sign Up Instead"}</div>
            </div>
        )
    }

}

export default LogIn
