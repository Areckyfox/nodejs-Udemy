const rootDir = require("./utils/path");

const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const adminPage = require("./routes/admin");
const shop = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminPage);
app.use(shop);

app.use((req, res, send) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
