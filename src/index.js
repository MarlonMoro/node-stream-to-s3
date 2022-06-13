
import { pipeline } from 'stream'
import MovieStream from "./MovieStream.js";
import TheMovieApiStream from './TheMovieApiStream.js';
import { stringify } from 'csv-stringify';
import uploadStream from './s3Stream.js'

const readMovieStrem = new MovieStream({ limit: 2})
const transformMovieStream = new TheMovieApiStream()

const csvStream = stringify({
    header: true,
    delimiter: ';',
    columns: [
        'title', 'status', 'popularity', 'release_date', 'created_at'
    ]
})

pipeline(
    readMovieStrem,
    transformMovieStream,
    csvStream,
    uploadStream(`movie-file-${new Date().toISOString()}.csv`),
    err => {
        if (err) {
            console.log('Stream pipeline error: ', err)
        } else {
            console.log('Stream pipeline concluido')
        }
    }
)




