/*global describe, beforeEach, afterEach, it, expect */
var PrimeFactorDecomposition = require('./prime.factors.decomposition');

describe('The prime factors decomposition of', function () {

    var decomposer = new PrimeFactorDecomposition();

    it('16 is 2,2,2,2', function (done) {
        expect(decomposer.decompose(16)).toEqual([2, 2, 2, 2]);
        done();
    });

    it('2 is 2', function (done) {
        expect(decomposer.decompose(2)).toEqual([2]);
        done();
    });

    it('3 is 3', function (done) {
        expect(decomposer.decompose(3)).toEqual([3]);
        done();
    });

    it('300 is 2,2,5,5', function (done) {
        expect(decomposer.decompose(300)).toEqual([2,2,3,5,5]);
        done();
    });
});