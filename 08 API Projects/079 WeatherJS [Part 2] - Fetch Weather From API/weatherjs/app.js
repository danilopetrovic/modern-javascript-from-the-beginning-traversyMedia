// Init weather object
const weather = new Weather('Serbia', 'Belgrade');

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location
// weather.changeLocation('Serbia', 'Belgrade');

function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
}