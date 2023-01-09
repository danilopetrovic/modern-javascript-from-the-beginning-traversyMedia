class Github {
    constructor() {
        this.clientId = 'c5fe35c3ca30f2a992bb';
        this.clientSecret = 'b1606b6aa6d9cf0bca6ad019a8116483465792ce';
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile, // profile: profile
            repos
        }
    }
}