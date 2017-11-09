'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');


describe('GET /user/userid', function() {
  before(function (done) {
       setTimeout(done, 1000);
   });
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/user/user1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.permissions.should.be.instanceof(Array);
        done();
      });
  });
});
