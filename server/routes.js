

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  // app.use('/things', require('./api/thing'));

  app.use('/user', require('./api/user'));
  app.use('/permissions', require('./api/permission'));
  app.use('/roles', require('./api/role'));


  //default route
  app.use('/', function(req, res){
    res.sendFile('index.html', { root: path.join(__dirname, '/static/templates/') });
  });

};
