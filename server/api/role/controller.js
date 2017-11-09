
'use strict';

var _ = require('lodash');
var RoleService = require('./service');
// var User = require('./model');

exports.modifyPermissions = function(req, res){
  var role_id = req.params.id, permission_arr = req.body.permissions;
  RoleService.modifyPermissions(role_id, permission_arr, function(err, role){
    if(err){
      res.status(400).json({message: "couldnt modify permissions", error: err});
      return;
    }
    res.status(200).json({message: "done", role: role});
    return;
  });
}
