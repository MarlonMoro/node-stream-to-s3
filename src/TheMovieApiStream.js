import { Transform } from 'stream'
import themovieApi from './TheMovieApi.js'

export default class TheMovieApiStream extends Transform {

    constructor(){
        super({objectMode: true})
    }

    async _transform(chunk, encoding, callback) {
        const { movieId, createdAt } = chunk
        try {
            const { title, status, popularity, release_date } = await themovieApi.getMovieDetails(movieId)
            callback(null, { title, status, popularity, release_date, created_at: createdAt.toString() })
        } catch (error) {
            callback(error)
        }
    }
}