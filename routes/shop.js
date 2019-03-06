const path = require("path");

const express = require("express");

const addProductCotroll = require('../controllers/products');

const router = express.Router();

router.get("/", addProductCotroll.getProducts);

module.exports = router;
