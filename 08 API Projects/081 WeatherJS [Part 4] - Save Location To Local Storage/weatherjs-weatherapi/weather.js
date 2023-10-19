// TODO: make a loader/spinner while fetching getCities() results...
class Weather {
    constructor(state, city) {
        // https://www.weatherapi.com/api-explorer.aspx
        this.apiKey = '609c6c0e2a2e4d4fbac150629231610';
        this.state = state;
        this.city = city;
        this.url;
        this.inputText;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=belgrade-central-serbia-serbia&days=1&aqi=yes&alerts=yes`);
        // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=609c6c0e2a2e4d4fbac150629231610 &q=Serbia&aqi=yes`);
        // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey} &q=${this.state}&aqi=yes`);

        const responseData = await response.json();
        return responseData;
    }

    // Change weather location
    changeLocation(state, city, url) {
        this.state = state;
        this.city = city;
        this.url = url;
    }

    // Get list of Cities
    async getCities(text) {
        this.inputText = text;
        const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=${this.apiKey}&q=${this.inputText}`);

        const responseData = await response.json();
        return responseData;
    }
}