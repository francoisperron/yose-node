var url = require('url');

function PrimeFactorsEndpoint() {
}

PrimeFactorsEndpoint.prototype.answer = function (request, response) {
    var query = url.parse(request.url, true).query;
    var number = parseInt(query.number);

    if (isNaN(number)) {
        answerError(query.number, response);
    }
    else {
        answerDecomposition(number, response);
    }
};

function answerError(number, response) {
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({number: number, error: "not a number"}));
    response.end();
}

function answerDecomposition(number, response) {
    var decomposition = decompose(number);

    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({number: number, decomposition: decomposition}));
    response.end();
}

function decompose(number) {
    var decomposition = [];
    while (number >= 2) {
        decomposition.push(2);
        number = number / 2;
    }
    return decomposition;
}

module.exports = PrimeFactorsEndpoint;