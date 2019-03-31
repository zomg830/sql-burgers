var connection = require("../config/connection.js");

var orm = {
  selectAll: cb => {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (burger, cb) => {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [burger], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: (id, cb) => {
    var query = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(query, [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
