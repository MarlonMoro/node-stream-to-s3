import axios from "axios";

class TheMovieDbApi {

    constructor(){
        this._api = axios.create({
            baseURL: 'https://api.themoviedb.org/3/movie',
            timeout: 500000,
            headers: { 'Authorization': process.env.api_key }
        });
    }

    async getMovieDetails(movieId) {
        const {status: apiStatus, data} = await this._api.get(`/${movieId}`)

        if (apiStatus != 200)
            throw new Error('Api error')
        const { title, status, popularity, release_date } = data
        return { title, status, popularity, release_date}
    }
}

export default new TheMovieDbApi()