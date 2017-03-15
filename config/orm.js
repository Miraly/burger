var connection = require("./connection.js");

var orm = {

    selectAll: function(response) {
        let query = "SELECT * FROM burgers";
        connection.query(query, function(err, data) {
            if (err) throw err;
            response(data);
        });
    },
    
    insertOne: function(burger, response) {
        let query = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        connection.query(query, [burger, false], function(err, data) {
            if (err) throw err;
            response(data);
        });
    },

    updateOne: function(id, response) {
        let query = "UPDATE burgers SET ? WHERE ?";
        connection.query(query, [{ devoured: true }, { id:id}], function(err, data) {
            console.log(data);
            if (err) {
                throw err;
            }
            response(data);
        });

    }

};

module.exports = orm;