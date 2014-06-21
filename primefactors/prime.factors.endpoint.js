var url = require('url');
var answerJson = require('../api/answer.json');

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
    answerJson(response, {number: number, error: "not a number"});
}

function answerDecomposition(number, response) {
    var decomposition = decompose(number);
    answerJson(response, {number: number, decomposition: decomposition});
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