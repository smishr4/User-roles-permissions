'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');


describe('GET permissions/checkpermission', function() {
  before(function (done) {
       setTimeout(done, 1000);
   });
  it('should respond with 200 status and Boolean result', function(done) {
    request(app)
      .get('/permissions/checkpermission?userid=user1&permissionid=perm1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.allowed.should.be.instanceof(Boolean);
        done();
      });
  });

  it('should respond with 200 status', function(done) {
    request(app)
      .delete('/permissions/perm1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });

});
