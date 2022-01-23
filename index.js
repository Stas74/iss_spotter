// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});


/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);

});
*/

/*
fetchCoordsByIP('184.64.168.199', (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', coords);
});

{ latitude: 51.0207, longitude: -114.1011 }

*/
/*
fetchISSFlyOverTimes({ latitude: 51.0207, longitude: -114.1011}, (error, result) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Result:', result);
});
*/

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
/*
 const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://freegeoip.live/json/184.64.168.199`, (error, response, body) => {
    const data = JSON.parse(body);
    // console.log('latitude', data.latitude)
    // console.log('longitude', data.longitude)
    console.log(data.ip);
  });
}
*/

// fetchMyIP();


