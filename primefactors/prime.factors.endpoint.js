var url = require('url');
var PrimeFactorDecomposition = require('./prime.factors.decomposition');
var answerJson = require('../api/answer.json');

function PrimeFactorsEndpoint() {
}

PrimeFactorsEndpoint.prototype.answer = function (request, response) {
    var numbers = extractNumbersFromRequest(request);
    var decompositions = calculateDecomposition(numbers);
    answerJson(response, render(decompositions));
};

function extractNumbersFromRequest(request) {
    var query = url.parse(request.url, true).query;

    if (query.number instanceof Array) {
        return query.number;
    } else {
        var numbers = [];
        numbers.push(query.number);
        return numbers;
    }
}

function calculateDecomposition(numbers) {
    var decompositions = [];

    for (var i = 0; i < numbers.length; i++) {
        var numberAsString = numbers[i];
        var number = parseInt(numberAsString);

        if (isNaN(number)) {
            decompositions.push(answerError(numberAsString));
        }
        else if (number > 1000000) {
            decompositions.push(answerNumberToBigError(number));
        }
        else {
            decompositions.push(answerDecomposition(number));
        }
    }
    return decompositions;
}

function render(decompositions) {
    if (decompositions.length == 1) {
        return decompositions[0];
    } else {
        return decompositions;
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