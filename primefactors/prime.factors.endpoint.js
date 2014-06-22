var url = require('url');
var answerJson = require('../api/answer.json');
var PrimeFactorsResponseFactory = require('./responses/prime.factors.response.factory');

function PrimeFactorsEndpoint() {
}

PrimeFactorsEndpoint.prototype.answer = function (request, response) {
    var numbers = extractNumbersFromRequest(request);
    var decompositions = numbers.map(calculateDecomposition);
    answerJson(response, render(decompositions));
};

function extractNumbersFromRequest(request) {
    var query = url.parse(request.url, true).query;
    return (query.number instanceof Array) ? query.number : [query.number];
}

function calculateDecomposition(element, index, array) {
    return new PrimeFactorsResponseFactory().build(element)
}

function render(decompositions) {
    return (decompositions.length == 1) ? decompositions[0] : decompositions;
}

module.exports = PrimeFactorsEndpoint;