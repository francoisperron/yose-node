var request = require('request');

function requesting(url, assertionCallback) {
    request(url, assertionCallback);
}

module.exports = requesting;
