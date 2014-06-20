/*global describe, beforeEach, afterEach, it, expect */
var request = require('request');
var Application = require('../../Application');

describe('First web service', function () {

    var app = new Application();

    beforeEach(function () {
        app.start();
    });

    afterEach(function () {
        app.stop();
    });

    it('answers json {alive:true} on /ping', function (done) {
        request('http://localhost:5000/ping', function (error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(response.body).toBe(JSON.stringify({alive:true}));
            expect(response.headers['content-type']).toBe('application/json');
            done();
        });
    });
});