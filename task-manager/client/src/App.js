import React, { Component } from 'react';
import logo from './logo.svg';
// css file temp commented out
// import './App.css';

import GoogleApiWrapper from './components/Map.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddStudent from './components/AddStudent.js';
import ViewStudents from './components/ViewStudents.js';
import HomeTasks from './components/HomeTasks.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
          <h2>Task Force</h2>
        </div>
        <Router>
          <div>
        <Link to = "/map">See Map</Link> | 
       
        <hr />
        
     
         <Route exact path ="/map" component={ GoogleApiWrapper }/>
        </div>
        </Router>
        <div>
        <AddStudent />
        </div>
         
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
