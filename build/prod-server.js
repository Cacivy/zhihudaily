var express = require('express');
var app = express();
var compress = require('compression');
var port = process.env.PORT || 3000;

app.use(compress());
app.use('/', express.static('dist'));
app.use('/static', express.static('static'));

app.listen(port);

console.log('localhost:' + port);
