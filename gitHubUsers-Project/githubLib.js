class GitHub{
    constroctor(){
        this.clientId= 'afaa41e50298b0244aff' ;
        this.clientSecret= '36830eb18d25e29854b4c65fcc97a3db1bd0ede7';
        this.repos_count= 3;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const ProResp = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const repoResp = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await ProResp.json();
        const repos = await repoResp.json();
    
        return {
            profile,
            repos
        }
    }
}