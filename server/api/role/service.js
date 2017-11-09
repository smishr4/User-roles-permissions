var _ = require('lodash');
var Role = require('./model');

module.exports = {
  modifyPermissions: function(role_id, permissions, callback){
    Role.update({id: role_id}, {$set: {permissions: permissions}}).exec(callback);
  }
}
