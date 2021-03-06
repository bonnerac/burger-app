// * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, id, cb) {
        orm.updateOne("burgers", objColVals, condition, id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;