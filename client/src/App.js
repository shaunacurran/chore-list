import React, { Component } from 'react';
import logo from './logo.svg';

// css file temp commented out
import styles from './uikit.css';
import infotext from './landing.css';
import navbar from './navbar.css';

import GoogleApiWrapper from './components/Map';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ToDo from './components/ToDo';
import ViewStudents from './components/ViewStudents';
import HomeTasks from './components/HomeTasks';
import AddTask from './components/AddTask';
import SignIn from './components/SignIn';
import NavImage from './components/NavImage';

class App extends Component {
  render() {
    return (
      

      <div>
        
  

        <Router>
          <nav className="uk-navbar-container uk-margin">
            <div className="uk-position-top">
              <nav className="uk-navbar-container uk-navbar-transparent">
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li className="uk-active"><Link to = "/signin/">Sign In</Link></li>
                    <li className="uk-active"><Link to="/map/">Map</Link></li>
                    <li className="uk-active"><Link to = "/addtask/">Tasks</Link></li>
                    <li className="uk-active"><Link to = "/toDoList/">To-Do List</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
              <Route exact path ="/" component={ NavImage } />
              <Route exact path ="/signIn" component={ SignIn }/>
              <Route exact path ="/map" component={ GoogleApiWrapper }/>
              <Route exact path ="/addTask" component={ AddTask }/>
              <Route exact path ="/toDoList" component={ ToDo }/>
        </nav>
        </Router>
      
      
          <div className="uk-position-medium uk-position-center-left uk-overlay uk-overlay-default">Create, organize, track, and complete errands fast and efficiently.
          </div>
    
       

      </div>
       
       
     
    
      
    );
  }
}

export default App;
