

// const oLat = 0;
// const oLon = 0;


const googleMapsClient = require('@google/maps').createClient({
  key: "AIzaSyCicRPM6zzE6VFEw7iN4ScfF_VVSppnBlQ"
});
//This should run anytime an actual address location is listed during creation.
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
    // console.log(res)
 // return res;


  }
  // cb(res);
})


},


distances: function(latlon, destLatandLon){
    return googleMapsClient.distanceMatrix({
      origins: latlon,
      destinations: destLatandLon
    }, function(err, response) {
  if (response) {
    console.log(response.json.rows[0]);
  }
    })
},


// TURN BY TURN directions
    directions: function(resCoordArray){
      let resCoord = resCoordArray 
        googleMapsClient.directions({
         origin: [resCoordArray[0], resCoordArray[1]],
         destination: [resCoordArray[2], resCoordArray[3]]
    }, function(err, response) {
  if (!err) {
    // response.json.routes[0].legs[0].steps.forEach(function(element) {
    //    console.log(element.html_instructions) 
    // } );
    // console.log(response.json.routes[0].legs[0].distance.text);
    // console.log(response.json.routes[0].legs[0].duration.text)
    resCoord.push(response.json.routes[0].legs[0].distance.text);
    resCoord.push(response.json.routes[0].legs[0].duration.text);
    response.json.routes[0].legs[0].steps.forEach(function(element) {
       resCoord.push(element.html_instructions)});
       console.log(resCoord)


  }
    })
},
places: function(originCoordArray, taskPlace, callback){
        //let originCoord = helpers.geocoder(address);
        let resCoord = []
        googleMapsClient.places({
            query: taskPlace,
           
            location: originCoordArray,
            radius: 3209

        }, function(err, response) {
        if (response) {
                resCoord.push(originCoordArray[0])
                resCoord.push(originCoordArray[1])
                resCoord.push(taskPlace)
                resCoord.push(response.json.results[0].geometry.location.lat)
                resCoord.push(response.json.results[0].geometry.location.lng);
                resCoord.push(response.json.results[0].formatted_address);
               
    // console.log(response.json.results[0].geometry.location);
    // console.log(resCoord)
    //resCoord[0], resCoord[1]=original point's coord
     //resCoord[2], resCoord[3]=place's point's coord
      //resCoord[4]= address of place
      
        
        // return resCoord

    }
    if(callback) callback(resCoord)
 
    });

    }
};

// export default helpers;

//Example of working places function being called
// helpers.geocoder( "4016 N Central Park Ave, Chicago, IL 60618");
//Example of working directions bAeing called
// helpers.directions([41.9456545, -87.702458 ], [ 41.9544384, -87.7178357 ]);
helpers.places([ 41.9544384, -87.7178357 ], "Jewel", helpers.directions);

