'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {type: String, unique: true},
  roles: [{type: String}]
});

module.exports = mongoose.model('User', UserSchema);
