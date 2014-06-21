var http = require('http');
var flask_router = require('flask-router');

function Server(){
    this.router = new flask_router();
    this.port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
    this.ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
}

Server.prototype.start = function(){
    this.server = http.createServer(this.router.route).listen(this.port, this.ip);
};

Server.prototype.stop = function () {
    this.server.close();
};

Server.prototype.addGet = function(route, action){
    this.router.get(route, action);
};

module.exports = Server;