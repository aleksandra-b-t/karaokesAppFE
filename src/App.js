import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import LogIn from './LogIn'
import FavList from './components/FavList'
import Karaoke from './components/Karaoke'
import SongsContainer from './SongsContainer'
import UserPage from './UserPage'
import SongsList from './components/SongsList'
import { Route, Switch} from 'react-router'


class App extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    const token = localStorage.token
    if(token) {
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(res => {
        if(res.errors) {
          alert(res.errors)
        } else {
          this.setState({ currentUser: res})
        }
      })
    }

  }

  setUser = res => {
    console.log(res);
    this.setState(
      { currentUser: res.user },
      () => {
        localStorage.token = res.token
        this.props.history.push(`user/${res.user.id}`)
      }
    )
  }

  logout = () => {
    this.setState(
      { currentUser: null },
      () => {
        localStorage.removeItem("token")
        this.props.history.push("/login")
      }
    )
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/songs/:id" render={(routerProps)=> <Karaoke {...routerProps} /> }/>
          <Route path="/login" render={routerProps => <LogIn {...routerProps} setUser={this.setUser} /> }/>
          <Route path="/user/:id" render={(routerProps)=> <UserPage {...routerProps} /> }/>
          <Route path="/favorites" render={(routerProps)=> <FavList {...routerProps} /> }/>
          <Route path="/songs" render={(routerProps)=> <SongsContainer {...routerProps} /> }/>
          {/* <Route path="/songs" render={(routerProps)=> <SongsList {...routerProps} /> }/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
