const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const addProductCotroll = require('./controllers/products')

const adminRoute = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoutes);

app.use(addProductCotroll.page404);

app.listen(3003);
