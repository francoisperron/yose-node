/*global describe, beforeEach, afterEach, it, expect */
var requesting = require('./requesting');
var Server = require('./server');

describe('The server', function () {

    var server = {};

    beforeEach(function () {
        server = new Server();
        server.start();
    });

    afterEach(function () {
        server.stop();
        delete process.env.OPENSHIFT_NODEJS_PORT;
        delete process.env.OPENSHIFT_NODEJS_IP;
    });

    describe('uses port', function () {
        it('5000 by default', function (done) {
            requesting('http://localhost:5000', returnsStatutCode(404, done));
        });

        xit('provided with process.env.OPENSHIFT_NODEJS_PORT', function (done) {
            server.stop();
            process.env.OPENSHIFT_NODEJS_PORT = 8888;
            server = new Server();
            server.start();
            requesting('http://localhost:8888', returnsStatutCode(404, done));
        });
    });

    describe('uses ip', function () {
        it('localhost by default', function (done) {
            requesting('http://localhost:5000', returnsStatutCode(404, done));
        });

        xit('provided with process.env.OPENSHIFT_NODEJS_IP', function (done) {
            server.stop();
            process.env.OPENSHIFT_NODEJS_IP = '127.0.0.1';
            server = new Server();
            server.start();
            requesting('http://127.0.0.0:8888', returnsStatutCode(404, done));
        });
    });

    describe('ansers', function () {
        it('on added get', function (done) {
            server.addGet('/alive', stubAction);
            requesting('http://localhost:5000/alive', returnsStatutCode(200, done));
        });
    });


    function stubAction(request, response) {
        response.end();
    }

    function returnsStatutCode(statusCode, done) {
        return function (error, response, body) {
            if (!error) {
                expect(response.statusCode).toBe(statusCode);
                done();
            }
            else
                done("Fail");
        };
    }
});