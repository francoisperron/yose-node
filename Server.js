var http = require('http');
var flask_router = require('flask-router');

function Server(){
    this._router = new flask_router();
    this._port = process.env.PORT || 5000;
}

Server.prototype.start = function(){
    this._server = http.createServer(this._router.route).listen(this._port);
};

Server.prototype.stop = function () {
    this._server.close();
};

Server.prototype.addGet = function(route, action){
    this._router.get(route, action);
};

module.exports = Server;