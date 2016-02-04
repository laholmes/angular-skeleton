var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');
 
var app = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/'));
app.engine('.html', require('ejs').renderFile);

var env = process.env.NODE_ENV || 'development';

/**
 * Routes
 */
app.get('/', routes.index);

// start server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});