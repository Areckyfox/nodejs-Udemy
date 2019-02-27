const rootDir = require("./util/path");

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRouters = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

app.use(shopRouters);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "error404.html"));
});

app.listen(3000);
