// OpenWeatherMap API. Do not share it publicly.
const api = 'a333c4d3f31ec83546b83f32d5fa1bd4'; //Replaced with my API

window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
    });
  }
});