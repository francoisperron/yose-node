/*global describe, beforeEach, afterEach, it, expect */
var request = require('request');
var Application = require('../application');

describe('The power of two endpoint', function () {

    var app = new Application();

    beforeEach(function () {
        app.start();
    });

    afterEach(function () {
        app.stop();
    });

    it('returns the received number', function (done) {
        request('http://localhost:5000/primeFactors?number=16', function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toEqual('application/json');
            expect(JSON.parse(response.body).number).toEqual(16);
            done();
        });
    });

    it('returns the number decomposition', function (done) {
        request('http://localhost:5000/primeFactors?number=32', function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toEqual('application/json');
            expect(JSON.parse(response.body).decomposition).toEqual([2, 2, 2, 2, 2]);
            done();
        });
    });

    it('returns an error when received number is not a number', function (done) {
        request('http://localhost:5000/primeFactors?number=banane', function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(response.headers['content-type']).toEqual('application/json');
            expect(JSON.parse(response.body).number).toEqual("banane");
            expect(JSON.parse(response.body).error).toEqual("not a number");
            done();
        });
    });
});