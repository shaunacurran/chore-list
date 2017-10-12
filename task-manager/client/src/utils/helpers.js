

// const oLat = 0;
// const oLon = 0;


const googleMapsClient = require('@google/maps').createClient({
  key: "AIzaSyCicRPM6zzE6VFEw7iN4ScfF_VVSppnBlQ"
});

const helpers = {
geocoder: function(address, cb) {
let res = [];
googleMapsClient.geocode({
  address: address
}, function(err, response) {
  if (response) {
      
      res.push(response.json.results[0].geometry.location.lat)
      res.push(response.json.results[0].geometry.location.lng);
    // console.log(response.json.results[0].geometry.location);
    console.log(res)
 // return res;


  }
  cb(res);
})


},


distances: function(latlon, destLatandLon){
    return googleMapsClient.distanceMatrix({
      origins: [
       latlon
        ],
      destinations: [
        destLatandLon
      ]
    }, function(err, response) {
  if (!err) {
    console.log(response.json.rows[0].elements[0].distance.text);
  }
    })
},


// TURN BY TURN directions
    directions: function(latlon, destLatandLon){
      return googleMapsClient.directions({
      origin: [
      latlon
        ],
      destination: [
        destLatandLon
      ]
    }, function(err, response) {
  if (!err) {
    response.json.routes[0].legs[0].steps.forEach(function(element) {
       console.log(element.html_instructions) 
    } );

  }
    })
},
    places: function(originCoord){
        //let originCoord = helpers.geocoder(address);
  googleMapsClient.places({
            query: 'Target',
           
            location: originCoord,
            radius: 1609

        }, function(err, response) {
  if (!err) {
      
console.log(response.json.results[0].formatted_address);
//return console.log(response.json.results[0].formatted_address)
  }
});

    }
};

// export default helpers;

helpers.geocoder( "4016 N Central Park Ave, Chicago, IL 60618", helpers.places );

//helpers.places("4016 N Central Park Ave, Chicago, IL 60618");
// helpers.places([41.9544384, -87.7178357])
// helpers.places(helpers.geocoder("4016 N Central Park Ave, Chicago, IL 60618"));
// let place1 = helpers.places(helpers.geocoder("4016 N Central Park Ave, Chicago, IL 60618"));
// let place2 = helpers.geocoder("4016 N Central Park Ave, Chicago, IL 60618");
// helpers.distances(place1, place2);
