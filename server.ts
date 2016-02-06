const require = function(input: string) {};

const express: any = require('express');
const bodyParser: any = require('body-parser');
const methodOverride: any = require('method-override');
const errorHandler: any = require('error-handler');
const morgan: any = require('morgan');
const routes: any = require('./routes');
const http: any = require('http');
const path: any = require('path');
 
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