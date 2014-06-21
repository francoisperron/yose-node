var Server = require('./Server');
var Ping = require('./Ping');
var PrimeFactors = require('./PrimeFactors');

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