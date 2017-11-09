var _ = require('lodash');
var Permission = require('./model');
var async = require('async');
var User = require('../user/model');
var Role = require('../role/model');


module.exports = {
  isAllowed: function(user_id, permission_id, callback){
    async.waterfall([
      function(callback) {
        User.findOne({id: user_id}).exec(callback)
      },
      function(user, callback){
        Role.find({
          id: {$in: user.roles}
        }, callback);
      },
      function(roles, callback){
        callback(null, _.contains(_.flatten(_.collect(roles, 'permissions')), permission_id));
      }
    ], callback)
  }
};
