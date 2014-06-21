function PrimeFactorDecomposition() {

}

PrimeFactorDecomposition.prototype.decompose = function (number) {
    var primes = [];

    for (var candidat = 2; candidat < number + 1; candidat++) {
        while (number % candidat == 0) {
            primes.push(candidat);
            number /= candidat;
        }
    }

    return primes;
};

module.exports = PrimeFactorDecomposition;