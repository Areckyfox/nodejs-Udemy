const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const addUser = require('./routes/add-user');
const usersList = require('./routes/users-list');

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(addUser.routes)
app.use(usersList.routes)


app.use((req, res, next)=> {
    res.send('<h1>page not found</h1>')
})

app.listen(2000);