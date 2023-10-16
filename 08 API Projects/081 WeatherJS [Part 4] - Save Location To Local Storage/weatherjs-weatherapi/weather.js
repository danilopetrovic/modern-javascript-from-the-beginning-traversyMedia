class Weather {
    constructor(state, city) {
        // https://www.weatherapi.com/api-explorer.aspx
        this.apiKey = '609c6c0e2a2e4d4fbac150629231610';
        this.state = state;
        this.city = city;
    }

// Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=Serbia&days=1&aqi=yes&alerts=yes`);
        // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=609c6c0e2a2e4d4fbac150629231610 &q=Serbia&aqi=yes`);
        // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey} &q=${this.state}&aqi=yes`);

        const responseData = await response.json();
        return responseData;
    }

    // Change weather location
    changeLocation(state, city) {
        this.state = state;
        this.city = city;
    }
}