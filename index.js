const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = q.pathname.length > 1 ? "." + q.pathname : "./index.html";

    fs.readFile(fileName, (err, data) => {
      // If error, display contents of 404.html
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        fs.readFile("./404.html", (_, errData) => res.write(errData));
        return res.end("404 Not Found");
      }

      // Display correct page
      res.writeHead(404, { "content-type": "text/html" });
      res.write(data);
    });
  })
  .listen(8080);
