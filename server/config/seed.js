

'use strict';
// Insert seed models below
// var Thing = require('../api/thing/thing.model');
var User = require('../api/user/model');
var Role = require('../api/role/model');
var Permission = require('../api/permission/model');


// Insert seed data below
// var thingSeed = require('../api/thing/thing.seed.json');


var userSeed = require('../api/user/seed.json');
// Insert seed inserts below
// Thing.find({}).remove(function() {
//   Thing.create(thingSeed);
// });

var roleSeed = require('../api/role/seed.json');


var permissionSeed = require('../api/permission/seed.json');


User.find({}).remove(function() {
  User.create(userSeed);
});

Role.find({}).remove(function() {
  Role.create(roleSeed);
});


Permission.find({}).remove(function() {
  Permission.create(permissionSeed);
});
