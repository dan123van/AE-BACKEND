const cors = require("cors");
let test = require("./test-route");
let admin = require("./admin-route");
let customer = require("./customer");
let orders = require("./orders");
let shoppingCart = require("./shoppingCart");

let routes = (app, db) => {
  app.options("*", cors());

  app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Headers",
      "X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );

    next();
  });

  try {
    test(app);
    admin(app, db);
    customer(app, db);
    orders(app, db);
    shoppingCart(app, db);
  } catch (error) {
    console.log(error);
  }
};

module.exports = routes;
