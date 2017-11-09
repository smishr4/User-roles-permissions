'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoleSchema = new Schema({
  id: {type: String, unique: true},
  permissions: [{type: String}]
});

module.exports = mongoose.model('Role', RoleSchema);
