const request = require('request')
const fs = require('fs')

const { pathToFolder } = require('./config.json')

module.exports = (url, name) => {
    return new Promise((resolve, reject) => {
        request.head(url, (err, result, body) => {
            if(err) return reject(err)

            request(url).pipe(fs.createWriteStream(`${pathToFolder}/${name}`)).on('close', () => resolve())
        })
    })
}