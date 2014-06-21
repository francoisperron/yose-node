var Server = require('./api/server');
var Ping = require('./ping/ping');
var PrimeFactors = require('./primefactors/prime.factors');

function Application(){
}

Application.prototype.start = function(){
    this.server = new Server();
    this.server.addGet('/ping', new Ping().answer);
    this.server.addGet('/primeFactors', new PrimeFactors().answer);
    this.server.start();
};

Application.prototype.stop = function(){
    this.server.stop();
};

module.exports = Application;