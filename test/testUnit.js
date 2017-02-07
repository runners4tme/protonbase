var expect = require('chai').expect;
var supertest = require('supertest');
var app = require('../app');
var agent = supertest(app);

describe('protonbase on rendering home page', function() {
  describe('GET /', function() {
    it('should return the home page', function(done) {
      agent
        .get('/')
        .expect(function(res) {
          expect(res.status).to.equal(200);
        })
        .end(done);
    });
  });
});

describe('protonbase notifications on error', function() {
  describe('GET /error', function() {
    it('should return an error', function(done) {
      agent
        .get('/error')
        .expect(function(res) {
          expect(res.status).to.equal(404);
        })
        .end(done);
    });
  });
});
