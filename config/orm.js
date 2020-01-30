// Import MySQL connection.
var connection = require("../config/connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ?? ";

        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            return result;
        });
    }


    // insertOne: function (tableInput) {
    //     var queryString = "SELECT * FROM ?? ";

    //     connection.query(queryString, [tableInput], function (err, result) {
    //         if (err) throw err;
    //         return result;
    //     });
    // },



    // updateOne: function (tableInput) {
    //     var queryString = "SELECT * FROM ?? ";

    //     connection.query(queryString, [tableInput], function (err, result) {
    //         if (err) throw err;
    //         return result;
    //     });
    // }
}






// Export the orm object.
module.exports = orm;