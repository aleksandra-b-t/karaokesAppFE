import React from 'react';
import './App.css';
import NavBar from './NavBar'
import LogIn from './LogIn'
import UserPage from './UserPage'
import Karaoke from './Karaoke'
import SongsContainer from './SongsContainer'

function App() {
  return (
    <div>
    <NavBar />
    {/* <SongsContainer /> */}
    {/* <LogIn /> */}
    <UserPage />
    {/* <Karaoke /> */}
    </div>
  );
}

export default App;
