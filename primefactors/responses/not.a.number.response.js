function NotANumberResponse() {
}

NotANumberResponse.prototype.matches = function (number) {
    return isNaN(parseInt(number));
};

NotANumberResponse.prototype.respond = function (number) {
    return {number: number, error: "not a number"};
};

module.exports = NotANumberResponse;