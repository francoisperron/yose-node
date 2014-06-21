var url = require('url');
var PrimeFactorDecomposition = require('./prime.factors.decomposition')
var answerJson = require('../api/answer.json');

function PrimeFactorsEndpoint() {
}

PrimeFactorsEndpoint.prototype.answer = function (request, response) {
    var query = url.parse(request.url, true).query;
    var number = parseInt(query.number);

    if (isNaN(number)) {
        answerError(response, query.number);
    }
    else if(number > 1000000){
        answerNumberToBigError(response, number);
    }
    else {
        answerDecomposition(response, number);
    }
};

function answerError(response, number) {
    answerJson(response, {number: number, error: "not a number"});
}

function answerNumberToBigError(response, number) {
    answerJson(response, {number: number, error: "too big number (>1e6)"});
}

function answerDecomposition(response, number) {
    var decomposition = new PrimeFactorDecomposition().decompose(number);
    answerJson(response, {number: number, decomposition: decomposition});
}

module.exports = PrimeFactorsEndpoint;