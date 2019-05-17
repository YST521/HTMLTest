//
//
///*
//var http=require("http");
//var url=require("url");
//var fs=require('fs');
//var querystring = require('querystring');
// 
//var server=http.createServer(function(sreq,sres){
//  var url_parts=url.parse(sreq.url);//解析路径
//  var pathname = url_parts.pathname;
// 
//  /*  //固定参数，本示例是用的ajax请求，此处是将ajax的post参数写死，测试成功后，进一步接收参数。
//  var post_data = querystring.stringify({
//          func_id:'20000',
//          pagesize:'24',
//          pageindex:'0',
//          username:'admin',
//          pwd:'1234qwer',
//          co:'62c8ad0a15d9d1ca38d5dee762a16e01'
//  });*/
// //node路径下的请求不转发
//  if(pathname.match(/^\/node/)!=null){
//      var realPath = 'f:/'+pathname;//前台的html需放到f:/node下
//      fs.exists(realPath, function (exists) {
//          if (!exists) {
//              sres.writeHead(404, {'Content-Type': 'text/plain'});
//              sres.write("404 not found.");
//              sres.end(data,'utf-8');
//          } else {
//              fs.readFile(realPath, "binary", function (err, file) {
//                  if (err) {
//                      sres.writeHead(500, {'Content-Type': 'text/plain'});
//                      sres.end(err);
//                  } else {
//                      sres.writeHead(200, {'Content-Type': 'text/html'});
//                      sres.write(file, "binary");
//                      sres.end();
//                  }
//              });
//          }
//      });
//  }else{
//      console.log("转发请求。。。。");
//      var opts={
//          host:"10.10.21.65",//跨域访问的主机ip
//          port:8080,
//          path:url_parts.pathname,
//          headers:sreq.headers,
//          method:'POST'
//      };
//      var content = '';        
// 
//      sreq.on("data",function(data){//接收参数 ------ sreq.on("data",function(data){});接收html中ajax传递的参数
//          var req = http.request(opts, function(res) {
//              res.on('data',function(body){
//                  console.log('return');
//                  content+=body;
//              }).on("end", function () {
//                  //返回给前台
//                  if(res.headers != null&& res.headers['set-cookie'] != null){
//                 //console.log("=======res.headers.cookie======="+res.headers.cookie);
//                     sres.writeHead(200, {
//                                 'Content-Type': 'text/html',
//                                 'Set-Cookie': res.headers['set-cookie']
//                     });//将cookie放到response中
//                 }
//                 else{
//                        sres.writeHead(200, {'Content-Type': 'text/html'});
//                 }
//                  sres.write(content);
//                  sres.end();
//              });
//          }).on('error', function(e) {
//              console.log("Got error: " + e.message);
//          });
//          //console.log("固定参数===="+post_data);
//          //console.log("接收参数===="+data+"\n");
//        if(sreq.headers.cookie != null ){
//           req.setHeader('Cookie',sreq.headers.cookie);
//        }//获取request中的cookie</span>
// 
//          req.write(data+"\n");
//          req.end();
//      });
//  }
//});
//server.listen(8080,"127.0.0.1", function () {//监听端口8080
//  console.log("开始监听"+server.address().port+"......");
//});
//*/

/*
var http = require('http');
var url=require('url');
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var content = '';
    var opt = {
         host:'news.163.com',
         port:'80',
         method:'GET',
         path:pathname
    };
    var req = http.request(opt, function(res) {
        res.on('data',function(body){
            console.log('return');
            content+=body;
        }).on("end", function () {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(content);
            response.end();
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
    req.end();
}).listen(80);//监听端口80,将80端口的请求转发到news.163.com
console.log("Server runing at port: " + 80 + ".");

*/



var http = require("http");
http.setHeader("Access-Control-Allow-Origin", "*"); 
http.createServer(function(request, response) {
//	response.setHeader("Access-Control-Allow-Origin", "*"); 
// 允许远端访问
//header('Access‐Control‐Allow‐Origin: *');
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    if(request.url == '/'){
    	
    	response.setHeader("Access-Control-Allow-Origin", "*"); 
    	    response.write("Welcome to Nodejs");
    response.end();
    
    }


}).listen(8000, "127.0.0.1");

console.log("Creat server on http://127.0.0.1:8000/");



//test 2


var http = require('http');
var url = require('url');
var util = require('util');
 
//req 请求信息   res返回信息
http.createServer(function(req, res){
    res.writeHeader(200, {'Content-Type':'text/javascript;charset=UTF-8'});  //状态码+响应头属性
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;  //parse将字符串转成对象,req.url="/?url=123&name=321"，true表示params是{url:"123",name:"321"}，false表示params是url=123&name=321
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
 
}).listen(3000)




//打开终端进入 nodejsTest.js 所在目录， 输入 node nodejsTest




//http://127.0.0.1:8000/
//http://localhost:8000/

//http://localhost:3000/create
// http://localhost:3000/getjson/nodetest01
//http://localhost:3000/getjson/nodetest02

//
//{"a": [11,2,333,44,5],"b":{"bb":22,"bbb":222},"c":3}

//{
//  "first":[
//      {"name":"张三","sex":"男"},
//      {"name":"李四","sex":"男"},
//      {"name":"王武","sex":"男"},
//      {"name":"李梅","sex":"女"}
//  ]
//}

//http://localhost:3000/getjson/test1


//http://localhost:3000/getjson/nodejstest