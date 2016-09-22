var express = require('express');
var app = express();
var compress = require('compression');

app.use(compress());
app.use('/', express.static('dist'));
app.use('/static', express.static('static'));

app.listen(3000);