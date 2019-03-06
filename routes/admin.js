const path = require("path");

const express = require("express");

const router = express.Router();

const addProductCotroll = require('../controllers/products');

// /admin/add-product => GET
router.get("/add-product", addProductCotroll.addProductGET);


// /admin/add-product => POST
router.post("/add-product", addProductCotroll.addProductPOST);

module.exports = router;
