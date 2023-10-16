// Init weather object
const weather = new Weather('Serbia', 'Belgrade');

// Init Ui object
const ui = new Ui();

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location
// weather.changeLocation('Serbia', 'Belgrade');

function getWeather() {
    weather.getWeather()
        .then(data => {
            // console.log(data);

            ui.paint(data);
        })
        .catch(err => console.log(err));
}