import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import LogIn from './LogIn'
import FavList from './components/FavList'
import Karaoke from './components/Karaoke'
import SongsContainer from './SongsContainer'
import UserPage from './UserPage'
import { Route, Switch} from 'react-router'



function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={LogIn}/>
        <Route path="/user" render={(routerProps)=> <UserPage {...routerProps} /> }/>
        <Route path="/favorites" render={(routerProps)=> <FavList {...routerProps} /> }/>
        <Route path="/songs" render={(routerProps)=> <SongsContainer {...routerProps} /> }/>
        <Route path="/songs/:id" render={(routerProps)=> <Karaoke {...routerProps} /> }/>

      </Switch>
    </div>
  );
}

export default App;
