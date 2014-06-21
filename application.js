var Server = require('./api/server');
var PingEndpoint = require('./ping/ping.endpoint');
var PrimeFactorsEndpoint = require('./primefactors/prime.factors.endpoint');

function Application(){
}

Application.prototype.start = function(){
    this.server = new Server();
    this.server.addGet('/ping', new PingEndpoint().answer);
    this.server.addGet('/primeFactors', new PrimeFactorsEndpoint().answer);
    this.server.start();
};

Application.prototype.stop = function(){
    this.server.stop();
};

module.exports = Application;