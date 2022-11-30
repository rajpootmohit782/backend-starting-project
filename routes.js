const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write("<body>");
      res.write(`${data}`);
      res.write("<form action='/message' method='POST'>"); // Adding a form element
      res.write("<input type='text' name='message'>"); // Adding an input field
      res.write("<button type='submit'>Submit</button>"); // Adding a button
      res.write("</form>");
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(body);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          return res.end();
        }
        res.statusCode = 302;

        res.setHeader("Location", "/");

        return res.end();
      });
    });
  }
  {
    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>my page</title></head>");
    // res.write("<body>");
    // res.write("<h1>Message</h1>"); // Adding a button
    // res.write("</body>");
    // res.write("</html>");
    // return res.end();
  }
};

module.exports = requestHandler;
