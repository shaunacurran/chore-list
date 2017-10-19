import React, { Component } from 'react';
import image from '../images/biker.png'
import textSmile from '../images/textsmile.png'
import pencil from '../images/pencil.png'
import check from '../images/check.png'
import mapPin from '../images/map.png'
import styles from '../navbar.css';


class NavImage extends Component {

render() {
    return (
    <div>
      
    <div className = "bikeContainer">
      <img className = "cyclist" src={image} alt="image of cyclist"/>
     </div> 
    
      
    <div className="uk-position-medium uk-position-center-left uk-overlay uk-overlay-default">Create, organize, track, and complete errands fast and efficiently.
      <div className="uk-container">
        <a className="uk-button uk-button-default" href="/householdsignup/">CREATE ACCOUNT</a> <a className="uk-button uk-button-default" href="/signin/">LOGIN</a>  
      </div>
    </div>
    

    <div className="iconContainer">
      <center><div className = "uk-column-1-3">
        <div>
          <img className = "pencil" id = "icons" src={pencil} alt="pencil vector image"/>
          <p>CREATE</p>
        </div>
        <div>
          <img className = "check" id = "icons" src={check} alt="check mark vector image"/>
          <p>TRACK</p>
        </div>
        <div>
          <img className = "mapPin" id = "icons" src={mapPin} alt="map pin vector image"/>
          <p>FIND</p>
        </div>
      </div></center>
    </div>
     
 


    <div className = "uk-column-1-2">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div>
        <img className = "textSmile" src={textSmile} alt="image of girl smiling with phone"/>
        </div>
      </div>






    </div>
    );
  }
}


export default NavImage;