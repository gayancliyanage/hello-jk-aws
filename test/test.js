/**
 * Created by gayancliyanage on 1/10/15.
 */
var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        request(app).get('/').expect('hello jenkins', done);
    });
});