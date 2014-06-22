var PrimeFactorDecomposition = require('../prime.factors.decomposition');

function DecompositionResponse() {
}

DecompositionResponse.prototype.matches = function (number) {
    return true;
};

DecompositionResponse.prototype.respond = function (number) {
    var parsedNumber= parseInt(number);
    var decomposition = new PrimeFactorDecomposition().decompose(parsedNumber);
    return {number: parsedNumber, decomposition: decomposition};
};

module.exports = DecompositionResponse;