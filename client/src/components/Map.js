import React, { Component } from 'react';



import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const style = {
  width: '70%',
  height: '70%'
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
    <div>
      
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


