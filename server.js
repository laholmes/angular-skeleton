'use strict';
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let errorHandler = require('error-handler');
let morgan = require('morgan');
let http = require('http');
let path = require('path');
 
let app = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/'));
app.engine('.html', require('ejs').renderFile);

let env = process.env.NODE_ENV || 'development';

/**
 * Routes
 */
app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

// start server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});