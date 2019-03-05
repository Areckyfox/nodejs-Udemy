const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const users = [];

router.get('/add-user', (req, res, next)=>{
    res.render('add-user', {pageTitle: "Add User"})
});

router.post('/add', (req, res, next)=>{
    users.push(req.body.user);
    console.log(users);
    
    // res.redirect('/');
});

exports.routes = router;
exports.users = users;
