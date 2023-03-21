const http = require("http");

const { parse } = require("querystring");

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    res.writeHead(200);
    res.end("My first post request!");
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      parse(body);
      console.log(body);
    });
  } else {
    res.writeHead(200);
    res.end("My first server!");
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
