'use strict';

var express = require('express');
var controller = require('./controller');

var router = express.Router();
router.get('/checkpermission', controller.isAllowed);
router.delete('/:id', controller.destroy);



module.exports = router;
