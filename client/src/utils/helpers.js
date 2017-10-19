import axios from 'axios';
var APIkey = "AIzaSyDnGMHkWUjvmtY8EAoTAAfrl5L8Q_yptxo";
const helpers = {


getGeocode: function(address){
   let url= "https://maps.googleapis.com/maps/api/geocode/json?address="+address;
    return axios
    .get(url)
  .then(function (response) {
    console.log(
      `City: ${response.data.results[0].formatted_address} -`,
      `Latitude: ${response.data.results[0].geometry.location.lat} -`,
      `Longitude: ${response.data.results[0].geometry.location.lng}`
    );
    return response.data.results[0];
  })
  .catch(error => {
    console.log(error);
  });
},
getPlace: function(task){
   let url= "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.8962937,-87.6187988&radius=1000&keyword=" + task +"&key="+APIkey;
return axios
  .get(url)
  .then(response => {
    console.log(
         `City: ${response.data.results[0].vicinity} -`,
      `Latitude: ${response.data.results[0].geometry.location.lat} -`,
      `Longitude: ${response.data.results[0].geometry.location.lng}`
    );
    return response.data.results[0]
    
  })
  .catch(error => {
    console.log(error);
  });
},
}
export default helpers;