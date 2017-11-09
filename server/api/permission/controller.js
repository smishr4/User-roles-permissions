
'use strict';

var _ = require('lodash');
var PermissionService = require('./service')
var Permission = require('./model');



exports.isAllowed = function(req, res){
  var user_id = req.query.userid, permission_id = req.query.permissionid;
  if(!user_id || !permission_id){
    res.status(400).json({message: "missing params"});
    return;
  }
  PermissionService.isAllowed(user_id, permission_id, function(error, isAllowed){
    if(error){
      res.status(500).json({message: "Internal server error", error: error});
    }
    isAllowed ?
    res.status(200).json({allowed: true, message: "Allowed"}) : res.status(401).json({allowed: false, message: "Not allowed"});
    return;
  });
  return;
}

// Deletes a permission from the DB.
exports.destroy = function(req, res) {
  Permission.remove({
    id: req.params.id
  }).exec(function(err, result){
    if(err){
      res.status(400).json({message: "Couldnt delete", error: err});
    } else {
      res.status(200).json({message: "Permission deleted"});
    }
    return;
  });
};
