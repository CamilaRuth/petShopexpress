const fs = require('fs');
const log = (request, response, next) => {
    fs.appendFileSync('log.txt', `O usuario acessou a url: ${request.url} \n`);
    next();
}

module.exports = log;