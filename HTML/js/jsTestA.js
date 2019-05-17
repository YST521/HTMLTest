
//https://blog.csdn.net/document_dom/article/details/89407676
//https://www.cnblogs.com/gamedaybyday/p/6637933.html

//接收get
/*
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
 
}).listen(3000);
*/
//http://127.0.0.1:3000/?url=123&name=321


//发送get
/*
var http = require('http'); 
   
var qs = require('querystring'); 
   
var data = { 
    a: 123, 
    time: new Date().getTime()};//这是需要提交的数据 
   
   
var content = qs.stringify(data); 
   
var options = { 
    hostname: '127.0.0.1', 
    port: 10086, 
    path: '/pay/pay_callback?' + content, 
    method: 'GET' 
}; 
   
var req = http.request(options, function (res) { 
    console.log('STATUS: ' + res.statusCode); 
    console.log('HEADERS: ' + JSON.stringify(res.headers)); 
    res.setEncoding('utf8'); 
    res.on('data', function (chunk) { 
        console.log('BODY: ' + chunk); 
    }); 
}); 
   
req.on('error', function (e) { 
    console.log('problem with request: ' + e.message); 
}); 
   
req.end();
*/


//接收post
/*
var http = require('http');
var querystring = require('querystring');
 
//var postHTML =
//  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' 
//  '<body>' 
//  '<form method="post">' 
//  '网站名： <input name="name " /><br>' 
//  '网站 URL： <input name="url" value = '999'' /><br/>' 
//  '<input type="submit">' 
//  '</form>' 
//  '</body></html>';
var postHTML ='  <html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>
    <body>
    <form method="post">
    	<div>
    网站名：</div> <input name="name " value = '666' /><br>
   	<div>  网站 URL：</div> <input name="url" value = '999'' /><br/>
    <input type="submit">
    </form>
    </body></html>';
 
http.createServer(function (req, res) {
    //暂存请求体信息
    var body = "";
 
    //请求链接
    console.log(req.url);
 
    //每当接收到请求体数据，累加到post中
    req.on('data', function (chunk) {
    	     	res.write('alert(chunk)');
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
 
    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);
        // 设置响应头部信息及编码\<br><br>      res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        	res.write(body);
        	console.log(body);
        	res.write('alert(body.name)');
        if(body.name && body.url) { // 输出提交的数据
  	console.log(body.name);
  		console.log(body.url);
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
*/

//发送 post

var http = require('http');
var querystring = require('querystring');
 
var contents = querystring.stringify({
    name:'byvoid',
    email:'byvoid@byvoid.com',
    address:'Zijing'
});
 
var options = {
    host:'www.byvoid.com',
    path:'/application/node/post.php',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':contents.length
    }
}
 
var req = http.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log("data:",data);   //一段html代码
    });
});
 
req.write(contents);
req.end;


/*
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
*/




/*
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
    //解决跨域问题
    res.writeHeader(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    // url.parse 方法来解析 URL 中的参数
    var pathname = url.parse(req.url, true).pathname;
    if (pathname == '/jsTestA') {
        // 定义了一个body变量，用于暂存请求体的信息
        var body = '';
        //// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
        req.on('data', function (data) {
            body += data;
        });

        req.on('end', function () {
            var myBody = querystring.parse(body); //querystring.parse将post解析为真正的POST请求格式
            res.write(JSON.stringify(myBody));
            res.end();
        })
    }
});

server.listen(8000, function () {
	
    console.log('server start at localhost:8081');
});
*/

//get请求

//var http = require('http');
//var querystring = require('querystring');
// 
//var postHTML =
//  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//  '<body>' 
//  '<form method="post">' 
//  '	<div> 网站名：</div><input name="name" placeholder="请输入账户名" /><br />' 
//  ' 	<div>网站 URL：</div> <input name="url" placeholder="请输入账密码" /><br>' 
//  '<input type="submit">' 
//  '</form>' 
//  '</body></html>';
    
//  	<div></div>
    	
    
//var http = require('http');
//var url = require('url');
//var querystring = require('querystring');
//
//var server = http.createServer(function (req, res) {
//  //解决跨域问题
//  res.writeHeader(200, {
//      'Content-Type': 'text/plain',
//      'Access-Control-Allow-Origin': '*'
//  });
//  // url.parse 方法来解析 URL 中的参数
//  var pathname = url.parse(req.url, true).pathname;
//  if (pathname == 'index') {
//      // 定义了一个body变量，用于暂存请求体的信息
//      var body = '';
//      //// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
//      req.on('data', function (data) {
//          body += data;
//      });
//
//      req.on('end', function () {
//          var myBody = querystring.parse(body); //querystring.parse将post解析为真正的POST请求格式
//          res.write(JSON.stringify(myBody));
//          res.end();
//      })
//  }
//});
//
//server.listen(3000, function () {
//  console.log('server start at localhost:8081');
//});

//http://localhost:8081/js_19(post)