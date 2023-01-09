class Github {
    constructor() {
        this.clientId = 'c5fe35c3ca30f2a992bb';
        this.clientSecret = 'b1606b6aa6d9cf0bca6ad019a8116483465792ce';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();

        return {
            profile // profile: profile
        }
    }
}