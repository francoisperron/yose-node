/*global describe, beforeEach, afterEach, it, expect */
var Application = require('../application');
var requesting = require('../api/requesting');
var returnsElementWithValue = require('../api/returns.element.with.value');

describe('First web service', function () {

    var app = new Application();

    beforeEach(function () {
        app.start();
    });

    afterEach(function () {
        app.stop();
    });

    it('answers alive:true on /ping', function (done) {
        requesting('http://localhost:5000/ping',
            returnsElementWithValue('alive', true, done));
    });
});