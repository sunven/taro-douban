var http = require("http");
var url = require("url");
http
  .createServer(function(request, response) {
    var urlObj = url.parse(request.url);
    var pathname = urlObj.pathname;
    var search = urlObj.search;
    var content = "";
    var opt = {
      host: "api.douban.com",
      port: "80",
      method: "GET",
      path: pathname + search
    };
    var req = http
      .request(opt, function(res) {
        res
          .on("data", function(body) {
            console.log(pathname);
            console.log("return");
            content += body;
          })
          .on("end", function() {
            response.writeHead(200, {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-control-Allow-Headers":"*",
              "Access-Control-Allow-Methods":"GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH"
            });
            //response.writeHead("Access-Control-Allow-Origin","*");
            response.write(content);
            response.end();
          });
      })
      .on("error", function(e) {
        console.log("Got error: " + e.message);
      });
    req.end();
  })
  .listen(8001); //监听端口80,将80端口的请求转发到news.163.com
