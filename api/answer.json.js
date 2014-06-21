function answerJson(response, body) {
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(body));
    response.end();
}

module.exports = answerJson;