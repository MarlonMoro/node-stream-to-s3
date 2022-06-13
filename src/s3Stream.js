import pkg from 'aws-sdk'
import { PassThrough } from 'stream'
const s3Client = new pkg.S3({ apiVersion: '2006-03-01', region: "us-east-1" });

const uploadStream = (filename) => {
    const pass = new PassThrough();

    const params = {
        Bucket: process.env.bucket,
        Key: filename,
        Body: pass
    }

    s3Client.upload(params, function (err) {
        if (err) {
            console.error('upload error: ', err)
        }
        console.log('upload finished')
    })

    return pass
}


export default uploadStream