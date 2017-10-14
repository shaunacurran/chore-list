import React, { Component } from 'react';
import styles from '../uikit.css';



import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const style = {
  width: '100%',
  height: '100%'
}
class MapContainer extends Component {
  
// render() {
//     return (
//       <Map google={this.props.google} zoom={14}
//         centerAroundCurrentLocation={true}>

//         <Marker  position={{ lat: 41.954438, lng: -87.717836 }}
//                   name={"My Home"} /> 

//         {/*<InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>*/}
//       </Map>
//     );
//   }

render() {
    return (

      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'339 E. chicago Ave, chicago IL 60611'} />

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


