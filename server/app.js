/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
// Setup server
//var Promise = require('es6-promise').Promise;
var app = express();


var server = require('http').createServer(app);
require('./config/express')(app);
require('./components/module').init(app);
require('./routes')(app);
require('./components/db')();




// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
