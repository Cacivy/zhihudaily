//实现一个api请求代理

var http= require('http')
var url = require('url');
var qs = require('querystring');

var type=['GET','POST'];
http.createServer(function(req, response){
 response.writeHead(200, {'Content-type' : 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'});
 //参数 例 http://localhost:3000/GET?host=news-at.zhihu.com&url=/api/4/start-image/1080*1776
 var pathname = url.parse(req.url).pathname.toUpperCase();
 var arg = url.parse(req.url).query;
 var str = qs.parse(arg);
 
  var opt = {
    host: str.host,
    port:'',
    method:pathname.substring(1),
    path: str.url,
    headers:{
      //请求头
    }
  }

var body=''
var req = http.request(opt, function(res) {
  console.log("Got response: " + res.statusCode);
  res.on('data',function(d){
  body += d
 }).on('end', function(){
  console.log(res.headers)
  console.log(body)
  console.log('------------------------------')

  body.replace(/http\w{0,1}:\/\/pic/g, "https://images.weserv.nl/?url=pic")
  response.write(body)
  response.end()
 });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
})
req.end();


}).listen(3000);