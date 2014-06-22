function TooBigNumberResponse() {
}

TooBigNumberResponse.prototype.matches = function (number) {
    return parseInt(number) > 1000000;
};

TooBigNumberResponse.prototype.respond = function (number) {
    return {number: parseInt(number), error: "too big number (>1e6)"};
};

module.exports = TooBigNumberResponse;