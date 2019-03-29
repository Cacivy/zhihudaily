var express = require('express');
var app = express();
var compress = require('compression');
var proxy = require('./proxy')
var port = process.env.PORT || 8081;

app.use(compress());
app.use('/', express.static('dist'));
app.use('/static', express.static('static'));
app.use('/api', proxy)

app.listen(port);

console.log('localhost:' + port);
