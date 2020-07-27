import React from 'react';
import { Form, Col, Card } from 'react-bootstrap';
//import './App.css';
//import logInBackground from '/logInBackground.jpg'
import './LogIn.css'

class LogIn extends React.Component {

    state= {
        name: '',
        password: '',
    }
    render() {
        return(
            <div>
                <form className='logIn'>
                    <label> Name: <input className='name' type="text" name="name" />
                    </label><br></br>
                    <label> Password: <input className='password' type="text" name="password" />
                    </label>
                    <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet" />
                    <div id="btn"><span class="noselect">Submit</span><div id="circle"></div></div>
                </form>
            </div>
        )
    }

}

export default LogIn
