//实现一个api请求代理
//参数 例 http://localhost:3000/GET?host=news-at.zhihu.com&url=/api/4/start-image/1080*1776

var request = require('request');
var http = require('http');
var url = require('url');
var qs = require('querystring');
var port = 3003;
console.log('Listening at http://localhost:' + port + '\n')

var type = ['GET', 'POST'];
http.createServer(function (req, res) {
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
}).listen(port);
