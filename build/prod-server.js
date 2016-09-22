var express = require('express');
var app = express();

app.use('/', express.static('dist'));
app.use('/static', express.static('static'));

app.listen(3000);