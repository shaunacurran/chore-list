import React, { Component } from 'react';
import logo from './logo.svg';

// css file temp commented out
import styles from './uikit.css';
import navbar from './navbar.css';

import GoogleApiWrapper from './components/Map.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ToDo from './components/ToDo.js';
import ViewStudents from './components/ViewStudents.js';
import HomeTasks from './components/HomeTasks.js';
import AddTask from './components/AddTask.js';
import SignIn from './components/SignIn.js';

class Signin extends Component {
  render() {
    return (
      
    <div>
        <form>
        <div className="uk-margin">
            <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input className="uk-input" type="text">
            </div>
        </div>
        
        <div className="uk-margin">
            <div className="uk-inline">
                <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input className="uk-input" type="text">
            </div>
        </div>      
        </form>
     </div>
    
      
    );
  }
}

export default Signin;
