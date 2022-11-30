const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body>");
    res.write("<form action='/message' method='POST'>"); // Adding a form element
    res.write("<input type='text' name='message'>"); // Adding an input field
    res.write("<button type='submit'>Submit</button>"); // Adding a button
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt");
    res.statusCode = 302;
    res.setH    res.writeHead(302, { "Location", "/" });
    res.write("Welcome to my Node Js project");
    return res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page not found");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000/");
});
