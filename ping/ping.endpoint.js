function PingEndpoint() {
}

PingEndpoint.prototype.answer = function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({alive: true}));
    response.end();
};

module.exports = PingEndpoint;