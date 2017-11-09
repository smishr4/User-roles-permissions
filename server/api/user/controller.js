
'use strict';

var _ = require('lodash');
var UserService = require('./service');

exports.getPermissions = function(req, res){
  console.log(req.params.id);
  UserService.getPermissions(req.params.id, function(error, permissions){
    if(error){
      res.status(500).send({message: "Internal server error.", error: error})
    } else if (!permissions) {
      res.status(204).send({message: 'No permissions.'})
    } else {
      res.status(200).json({
        permissions: permissions
      });
    }
    return;
  });

  return;
}
