function PrimeFactors() {
}

PrimeFactors.prototype.answer = function (request, response) {
    var alive = {number: 16};
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(alive));
    response.end();
};

module.exports = PrimeFactors;