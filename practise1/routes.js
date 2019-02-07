const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Pracitise one</title></head>");
    res.write(
      `<body>
                <h1>Greetings from node js mastery class</h1>
          <form action="/create-user" method="POST">
            <input type="text" name="username"> 
            <button type="submit">submit</button>
          </form>
        </body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      `<body>
            <h1>Users lists</h1>
            <ul>
                <li>Super User</li>
            </ul>
        </body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const user = parseBody.split("=")[1];
      console.log(user);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
  }
};

module.exports = {
  handler: requestHandler,
  someText: "Some text from export module"
};
