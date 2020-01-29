// Inside the `burgers_controller.js` file, import the following:

// * Express
// * `burger.js`

var express = require("express");
var burger = require("../models/burger.js");

// Create the `router` for the app,
var router = express.Router();

// export the `router` at the end of your file.
module.exports = router;