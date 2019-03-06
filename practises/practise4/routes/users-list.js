const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const users = require('./add-user');

router.get('/', (req, res, next) => {
    res.render('users-list', { pageTitle: "Add User", users: users.users })
});



exports.routes = router;
