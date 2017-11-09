'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');


describe('PUT roles/role1', function() {
  before(function (done) {
       setTimeout(done, 1000);
   });
  it('should respond with 200 status', function(done) {
    request(app)
      .put('/roles/role1')
      .send({
        permissions: ["perm6", "perm7"]
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });
});
