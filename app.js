const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("METHOD:", req.method, "\nURL:", req.url);
  if (req.method === "GET" && req.url === "/") {
    const html = fs.readFileSync("./views/index.html");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log("listening on ", port));
