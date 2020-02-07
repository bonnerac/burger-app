// Import MySQL connection.
var connection = require("../config/connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ?? ";

        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, col, val, cb) {
        var queryString = "INSERT INTO  ?? (??) VALUES (?)";

        connection.query(queryString, [tableInput, col, val], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },



    updateOne: function (tableInput, col, boolVal, id, val, cb) {
        var queryString = "UPDATE * FROM ?? SET ?? WHERE ?? = ? ";

        connection.query(queryString, [tableInput, col, boolVal, id, val], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}






// Export the orm object.
module.exports = orm;