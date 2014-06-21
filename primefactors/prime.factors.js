var url = require('url');

function PrimeFactors() {
}

PrimeFactors.prototype.answer = function (request, response) {
    var query = url.parse(request.url, true).query;
    var number = parseInt(query.number);
    var decomposition = decompose(number);

    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({number: number, decomposition: decomposition}));
    response.end();
};

function decompose(number) {
    var decomposition = [];
    while (number >= 2) {
        decomposition.push(2);
        number = number / 2;
    }
    return decomposition;
}
module.exports = PrimeFactors;