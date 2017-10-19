import React, { Component } from 'react';
import mapcss from '../map.css';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const style = {
  width: '70%',
  height: '70%'
}
class MapContainer extends Component {

render() {
    return (
    <div className = "mapContainer">
      
   <Map
   
          google={this.props.google}
          style={style}
          centerAroundCurrentLocation={true}
          zoom={15}
          onClick={this.onMapClicked}
        >

    <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'Dolores park'}
    position={{ lat: 41.954438, 
            lng: -87.717836}}/>
 

      </Map>
     </div> 
    );
  }
}

const wrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyDnGMHkWUjvmtY8EAoTAAfrl5L8Q_yptxo'
})(MapContainer);

export default wrapper;


