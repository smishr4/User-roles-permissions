'use strict';

var express = require('express');
var controller = require('./controller');

var router = express.Router();
// http://<server>/roles/<roleid> POST_PARAM:{"permissions":["perm5"]} (POST Method)

router.put('/:id', controller.modifyPermissions);

module.exports = router;
