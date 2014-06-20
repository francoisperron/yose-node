/*global describe, beforeEach, afterEach, it, expect */
var request = require('request');
var Server = require('./Server');

describe('The server', function () {

    var server = {};

    beforeEach(function () {
        server = new Server();
        server.start();
    });

    afterEach(function () {
        server.stop();
    });

    describe('uses port', function () {
        it('5000 by default', function (done) {
            aRequestOn('http://localhost:5000', returnsStatutCode(404, done));
        });

        it('provided with process.env.PORT', function(done){
            server.stop();
            process.env.PORT = 8888;
            server = new Server();
            server.start();
            aRequestOn('http://localhost:8888', returnsStatutCode(404, done));
            delete process.env.PORT;
        });
    });

    describe('ansers', function () {
        it('on added get', function (done) {
            server.addGet('/alive', stubAction);
            aRequestOn('http://localhost:5000/alive', returnsStatutCode(200, done));
        });
    });


    function stubAction(request, response) {
        response.end();
    }

    function aRequestOn(url, assertionCallback) {
        request(url, assertionCallback);
    }

    function returnsStatutCode(statusCode, done) {
        return function (error, response, body) {
            if(!error){
                expect(response.statusCode).toBe(statusCode);
                done();
            }
            else
                done("Fail");
        };
    }
});