var http = require("http");
var url = require("url");

createServer(
  1,
  "api.douban.com",
  {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH"
  },
  "8001"
);

createServer(2, "img3.doubanio.com", { "Content-Type": "image/jpeg" }, "8002");

function createServer(type, host, responseHeader, listenPort) {
  http
    .createServer(function(request, response) {
      var urlObj = url.parse(request.url);
      var pathname = urlObj.pathname;
      var search = urlObj.search || "";
      var content;
      if (type == 1) {
        content = "";
      } else if (type == 2) {
        content = [];
      }
      var opt = {
        host: host,
        port: "80",
        method: "GET",
        path: pathname + search
      };
      var req = http
        .request(opt, function(res) {
          console.log(request.url);
          res
            .on("data", function(body) {
              if (type == 1) {
                content += body;
              } else if (type == 2) {
                content.push(body);
              }
            })
            .on("end", function() {
              response.writeHead(200, responseHeader);
              if (type == 1) {
                response.write(content);
              } else if (type == 2) {
                var finalData = Buffer.concat(content);
                response.write(finalData);
              }
              response.end();
            });
        })
        .on("error", function(e) {
          console.log("Got error: " + e.message);
        });
      req.end();
    })
    .listen(listenPort);
  console.log("listen " + listenPort);
}
