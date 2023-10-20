class Ui {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');

        // Getting inputs and buttons for changing location form
        this.citySearchInput = document.getElementById('city-search-input');
        this.cityList = document.getElementById('city-list');
    }

    paint(data) {
        const location = data.location;
        const current = data.current;
        // console.log(location, '-------------------------------', current);

        this.location.textContent = `${location.country} - ${location.name}`;
        this.desc.textContent = current.condition.text;
        this.string.textContent = `${current.temp_c}° C`;
        this.icon.setAttribute('src', 'http:' + current.condition.icon);
        this.humidity.textContent = `Relative humidity: ${current.humidity}`;
        this.feelsLike.textContent = `Feels like: ${current.feelslike_c}° C`;
        this.pressure.textContent = `Pressure: ${current.pressure_mb} mb`;
        this.wind.textContent = `Wind speed: ${current.wind_kph} kmph (${current.wind_mph} mph), direction ${current.wind_dir}, ${current.wind_degree}deg`;
    }

    getCityInputValue() {
        if (this.citySearchInput.value.trim() === "") {
            this.citySearchInput.placeholder = "Type City or Country name...";
        }
        return this.citySearchInput.value.trim();
    }

    listCityResults(data) {
        // console.log(this.citySearchInput, this.cityList);
        let output = this.cityList.innerHTML;
        output = "";
        data.forEach(entry => {
            // console.log(entry);
            const li = `<li onclick="console.log(this.dataset.url)" data-url="${entry.url}" class="list-group-item  list-group-item-custom">${entry.name} - ${entry.country} - ${entry.region}</li>`;
            output += li;
        });
        this.cityList.innerHTML = output;
    }
}