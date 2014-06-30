function NegativeNumberResponse() {
}

NegativeNumberResponse.prototype.matches = function (number) {
    return parseInt(number) < 1;
};

NegativeNumberResponse.prototype.respond = function (number) {
    return {number: parseInt(number), error: 'is not an integer > 1'};
};

module.exports = NegativeNumberResponse;