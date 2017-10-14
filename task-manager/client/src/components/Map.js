
import React, { Component } from 'react';
import styles from '../uikit.css';



import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
render() {
    return (
      <div class="uk-container-small">
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'339 E. chicago Ave, chicago IL 60611'} />

        {/*<InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>*/}
      </Map>
    </div>
    
    );
  }
}

const wrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyDnGMHkWUjvmtY8EAoTAAfrl5L8Q_yptxo'
})(MapContainer);

export default wrapper;

// import { GoogleApiWrapper } from 'google-maps-react';
 
// // ... 
 
// export class MapContainer extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>hello world</h1>
//       </div>
//     )
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDnGMHkWUjvmtY8EAoTAAfrl5L8Q_yptxo' 
// })(MapContainer)