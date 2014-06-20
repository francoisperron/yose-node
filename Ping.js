function Ping() {
}

Ping.prototype.answer = function (request, response) {
    var alive = {alive: true};
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(alive));
    response.end();
};

module.exports = Ping;