var http = require('http');
var flask_router = require('flask-router');

function Server(){
    this._router = new flask_router();
    this._port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
    this._ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
}

Server.prototype.start = function(){
    this._server = http.createServer(this._router.route).listen(this._port, this._ip);
};

Server.prototype.stop = function () {
    this._server.close();
};

Server.prototype.addGet = function(route, action){
    this._router.get(route, action);
};

module.exports = Server;