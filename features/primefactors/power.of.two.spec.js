/*global describe, beforeEach, afterEach, it, expect */
var request = require('request');
var Application = require('../../Application');

describe('The power of two endpoint', function () {

    var app = new Application();

    beforeEach(function () {
        app.start();
    });

    afterEach(function () {
        app.stop();
    });

    it('returns the receiving number', function (done) {
        request('http://localhost:5000/primeFactors?number=16', function (error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toBe('application/json');
            expect(response.body).toBe(JSON.stringify({number:16}));
            done();
        });
    });
});