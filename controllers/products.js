const products = [];

exports.addProductGET = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product Page",
    path: "/admin/add-product",
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true
  });
};

exports.addProductPOST = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shopa",
    prods: products,
    docTitle: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};

exports.page404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "404-Page Not Found", path: " " });
};
