'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PermissionSchema = new Schema({
  id: {type: String, unique: true},
  name: String
});

module.exports = mongoose.model('Permission', PermissionSchema);
