var url = require('url');
var PrimeFactorDecomposition = require('./prime.factors.decomposition');
var answerJson = require('../api/answer.json');

function PrimeFactorsEndpoint() {
}

PrimeFactorsEndpoint.prototype.answer = function (request, response) {

    var numbers = extractNumbersFromQuery(request);
    var responseBody = [];

    for (var i = 0; i < numbers.length; i++) {
        var numberAsString = numbers[i];
        var number = parseInt(numberAsString);

        if (isNaN(number)) {
            responseBody.push(answerError(numberAsString));
        }
        else if (number > 1000000) {
            responseBody.push(answerNumberToBigError(number));
        }
        else {
            responseBody.push(answerDecomposition(number));
        }
    }

    if (responseBody.length == 1) {
        answerJson(response, responseBody[0]);
    } else {
        answerJson(response, responseBody);
    }
};

function extractNumbersFromQuery(request) {
    var query = url.parse(request.url, true).query;

    if (query.number instanceof Array) {
        return query.number;
    } else {
        var numbers = [];
        numbers.push(query.number);
        return numbers;
    }
}

function answerError(number) {
    return {number: number, error: "not a number"};
}

function answerNumberToBigError(number) {
    return {number: number, error: "too big number (>1e6)"};
}

function answerDecomposition(number) {
    var decomposition = new PrimeFactorDecomposition().decompose(number);
    return {number: number, decomposition: decomposition};
}

module.exports = PrimeFactorsEndpoint;