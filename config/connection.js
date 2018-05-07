// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

//    * Export the connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3307,
  host: "localhost",
  user: "root",
  password: "Pirahn437",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;