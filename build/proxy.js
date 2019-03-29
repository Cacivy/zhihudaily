var request = require('request');
var http = require('http');
var url = require('url');
var qs = require('querystring');
var port = 3003;
var type = ['GET', 'POST'];
//初始化路由
module.exports = function(req, res, next) {
  res.writeHead(200, { 'Content-type': 'application/json; charset=UTF-8', 'Access-Control-Allow-Origin': '*' });

  var pathname = url.parse(req.url).pathname.toUpperCase();
  var arg = url.parse(req.url).query;
  var str = qs.parse(arg);

  if (!str.host || !str.url) {
    return;
  }

  request('http://' + str.host + str.url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      body.replace(/http\w{0,1}:\/\/pic/g, "https://images.weserv.nl/?url=pic")
      res.write(body)
      res.end()
    }
  })
}
