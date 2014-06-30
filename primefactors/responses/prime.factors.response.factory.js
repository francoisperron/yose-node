var NotANumberResponse = require('./not.a.number.response');
var TooBigNumberResponse = require('./too.big.number.response');
var NegativeNumberResponse = require('./negative.number.response');
var DecompositionResponse = require('./decomposition.response');

function PrimeFactorsResponseFactory() {
    this.responses = [
        new NotANumberResponse(),
        new TooBigNumberResponse(),
        new NegativeNumberResponse(),
        new DecompositionResponse()
    ]
}

PrimeFactorsResponseFactory.prototype.build = function (number) {
    for (var i = 0; i < this.responses.length; i++) {
        if (this.responses[i].matches(number)) {
            return this.responses[i].respond(number);
        }
    }
};

module.exports = PrimeFactorsResponseFactory;