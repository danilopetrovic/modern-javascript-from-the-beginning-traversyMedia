// Init weather object
const weather = new Weather('Serbia', 'Belgrade');

// Init Ui object
const ui = new Ui();

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('refresh').addEventListener('click', () => {
    getWeather();
});

// Saving results
document.getElementById('w-change-btn').addEventListener('click', () => {
    // Change location
    // weather.changeLocation('Serbia', 'Belgrade', 'URL');
});

// Searching city
let typingTimer;
document.getElementById('city-search-input').addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(getInputSearch, 1000);
});

// Preventing submitting form
document.getElementById('w-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // console.info('Submit Prevented!');
});

// Focus on city search input after clicking change location
document.getElementById('change-location').addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('city-search-input').focus();
    }, 500);
});

function getWeather() {
    weather.getWeather()
        .then(data => {
            // console.log(data);

            ui.paint(data);
        })
        .catch(err => console.log(err));
}

function getInputSearch() {
    // console.warn('odlozeno');
    weather.getCities(ui.getCityInputValue())
        .then(data => {
            console.log(data);

            ui.listCityResults(data);
        })
        .catch(err => console.log(err));
}