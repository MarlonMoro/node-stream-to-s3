import { Readable } from 'stream'
import Movie from './Movie.js';

export default class MovieStream extends Readable {
    
    constructor({ limit = 5 }) {
        super({objectMode: true});
        this._limit = limit
        this._offset = 0
    }
    
    async _read() {

        const movies = await Movie.findAll({ limit: this._limit, offset: this._offset})

        for (const movie of movies) {
            this.push(movie)
        }

        if (!movies || (Array.isArray(movies) && movies.length == 0)) {
            this.push(null)
        }

        this._offset += this._limit
    }
}