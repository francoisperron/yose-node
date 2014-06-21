var answerJson = require('../api/answer.json');

function PingEndpoint() {
}

PingEndpoint.prototype.answer = function (request, response) {
    answerJson(response, {alive: true});
};

module.exports = PingEndpoint;