class Ui {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(data) {
        const location = data.location;
        const current = data.current;
        console.log(current);

        this.location.textContent = `${location.country} / ${location.name}`;
        this.desc.textContent = current.condition.text;
        this.string.textContent = `${current.temp_c}° C`;
        // this.details.textContent = current.last_updated;
        this.icon.setAttribute('src', 'http:'+current.condition.icon);
        this.humidity.textContent = `Relative humidity: ${current.humidity}`;
        this.feelsLike.textContent = `Feels like: ${current.feelslike_c}° C`;
        this.pressure.textContent = `Pressure: ${current.pressure_mb} mb`;
        this.wind.textContent = `Wind speed: ${current.wind_kph} kmph (${current.wind_mph} mph), direction ${current.wind_dir}, ${current.wind_degree}deg`;
    }
}