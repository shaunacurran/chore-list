import React, { Component } from 'react';
import logo from './logo.svg';
import image from './images/biker.png'
// css file temp commented out
import styles from './uikit.css';
import navbar from './navbar.css';

import GoogleApiWrapper from './components/Map.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ToDo from './components/ToDo.js';
import ViewStudents from './components/ViewStudents.js';
import HomeTasks from './components/HomeTasks.js';
import AddTask from './components/AddTask.js';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
        
      //     <h2>Task Force</h2>
      //   </div>
      <div>
        <Router>
          <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
            <img src={image} alt="image of cyclist"/>
            <div className="uk-position-top">
              <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li className="uk-active"><Link to="/map/">Map</Link></li>
                    <li className="uk-active"><Link to = "/addtask/">Tasks</Link></li>
                    <li className="uk-active"><Link to = "/toDoList/">To-Do List</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
              <Route exact path ="/map" component={ GoogleApiWrapper }/>
              <Route exact path ="/addTask" component={ AddTask }/>
              <Route exact path ="/toDoList" component={ ToDo }/>
        </nav>
        </Router>
        </div>
       
         
         
    
      
    );
  }
}

export default App;
