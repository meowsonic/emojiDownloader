const request = require('request')
const fs = require('fs')

module.exports = (url, name) => {
    return new Promise((resolve, reject) => {
        request.head(url, (err, result, body) => {
            if(err) return reject(err)

            request(url).pipe(fs.createWriteStream(`./emojis/${name}`)).on('close', () => resolve())
        })
    })
}