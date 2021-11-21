const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("METHOD:", req.method, "\nURL:", req.url);
  const html = fs.readFileSync("./views/index.html");
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(html);
  }
  if (req.method === "GET" && req.url === "/css-curriculum-example") {
    const cssPage = fs.readFileSync("./views/examples.html");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(cssPage);
  }
  return res.end(html);
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log("listening on ", port));
