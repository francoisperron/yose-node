function returnsElementWithValue(element, value, done) {
    return function (error, response, body) {
        expect(response.statusCode).toEqual(200);
        expect(response.headers['content-type']).toEqual('application/json');
        expect(JSON.parse(response.body)[element]).toEqual(value);
        done();
    };
}

module.exports = returnsElementWithValue;