var _ = require('lodash');
var User = require('./model');
var async = require('async');
var Permission = require('../permission/model');
var Role = require('../role/model');

var mixin = _.extend(User, {});
module.exports = _.extend(mixin, {
  getPermissions: function(id, callback){
    async.waterfall([
      function(callback){
        User.findOne({
          id: id
        }).exec(callback)
      },
      function(user, callback){
        Role.find({id: {$in: user.roles}}, callback);
      },
      function(roles, callback){
        Permission.find({
          id: {$in: _.flatten(_.collect(roles, 'permissions'))}
        }, callback)
      }
    ], callback);
  }
});
