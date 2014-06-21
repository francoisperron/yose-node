/*global describe, beforeEach, afterEach, it, expect */
var Application = require('../application');
var requesting = require('../api/requesting');
var returnsElementWithValue = require('../api/returns.element.with.value');

describe('The prime factors endpoint', function () {

    var app = new Application();

    beforeEach(function () {
        app.start();
    });

    afterEach(function () {
        app.stop();
    });

    it('returns the received number', function (done) {
        requesting('http://localhost:5000/primeFactors?number=16',
            returnsElementWithValue('number', 16, done));
    });

    it('returns the number decomposition', function (done) {
        requesting('http://localhost:5000/primeFactors?number=32',
            returnsElementWithValue('decomposition', [2, 2, 2, 2, 2], done));
    });

    it('returns an error when received number is not a number', function (done) {
        requesting('http://localhost:5000/primeFactors?number=banane',
            returnsElementWithValue('number', 'banane', done));
        requesting('http://localhost:5000/primeFactors?number=banane',
            returnsElementWithValue('error', 'not a number', done));
    });

    it('returns an error when received number is > 1e6', function (done) {
        requesting('http://localhost:5000/primeFactors?number=1000001',
            returnsElementWithValue('number', 1000001, done));
        requesting('http://localhost:5000/primeFactors?number=1000001',
            returnsElementWithValue('error', 'too big number (>1e6)', done));
    });

    it('accepts several numbers and returns their decomposition', function (done) {
        requesting('http://localhost:5000/primeFactors?number=9&number=banane&number=1000001', function (error, response, body) {
            expect(JSON.parse(response.body)[0].number).toEqual(9);
            expect(JSON.parse(response.body)[0].decomposition).toEqual([3, 3]);
            expect(JSON.parse(response.body)[1].number).toEqual("banane");
            expect(JSON.parse(response.body)[1].error).toEqual("not a number");
            expect(JSON.parse(response.body)[2].number).toEqual(1000001);
            expect(JSON.parse(response.body)[2].error).toEqual("too big number (>1e6)");
            done();
        });
    });
});