import React, { Component } from 'react';
import image from '../images/biker.png'

class NavImage extends Component {

render() {
    return (
    <div>
    <div>
      <img src={image} alt="image of cyclist"/>
     </div> 

    <div className="uk-position-medium uk-position-center-left uk-overlay uk-overlay-default">Create, organize, track, and complete errands fast and efficiently.
      <div className="uk-container">
        <button className="uk-button uk-button-default">CREATE ACCOUNT</button> <button className="uk-button uk-button-default">LOGIN</button>  
      </div>
    </div>
    </div>
    );
  }
}


export default NavImage;