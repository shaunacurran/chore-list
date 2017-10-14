import React, { Component } from 'react';
import logo from './logo.svg';
import image from './images/biker.png'
// css file temp commented out
import styles from './uikit.css';

import GoogleApiWrapper from './components/Map.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddStudent from './components/AddStudent.js';
import ViewStudents from './components/ViewStudents.js';
import HomeTasks from './components/HomeTasks.js';
import AddTask from './components/AddTask.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
          <h2>Task Force</h2>
        </div>
        
        <Router>
        <nav className="uk-position-relative" uk-navbar>
          <img src={image} alt="image of cyclist"/>
          <div className="uk-position-top">
              <ul className="uk-navbar-nav">
              <div className="uk-navbar-left">
                  <li className="uk-active"><a href="#">Active</a></li>
                  <li>
                      <a href="#">Parent</a>
                      <div className="uk-navbar-dropdown">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                              <li className="uk-active"><a href="#">Active</a></li>
                              <li><a href="#">Item</a></li>
                              <li><a href="#">Item</a></li>
                          </ul>
                      </div>
                  </li>
                  <li><a href="#">Item</a></li>
                  </div>
              </ul>
          </div>
        </nav>
        {/* <div className="uk-position-relative">
            <div className="uk-position-top">
              <nav className="uk-navbar-container uk-navbar-transparent uk-navbar">
                <div className="uk-navbar-left">
                  <Link to="/map">See Map</Link> |
                  <Link to="/addTask">Add A Task</Link> |
                  <Link to="/toDoList">To-Do List</Link> |
                </div>
              </nav>
            </div>
            <Route exact path ="/map" component={ GoogleApiWrapper }/>
            <Route exact path ="/addTask" component={ AddTask }/>
            <Route exact path ="/toDoList" component={ AddStudent }/>
        </div> */}
         
       </Router>  
         
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
