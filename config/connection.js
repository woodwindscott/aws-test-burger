// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: process.env.RDS_HOSTNAME,
//   port: process.env.RDS_PORT,
//   user: process.env.RDS_USERNAME,
//   password: process.env.RDS_PASSWORD,
//   database: process.env.RDS_DB_NAME
// });

var connection = mysql.createConnection({
  host: "aa1nebb9sip7z5v.c8mftva3qql4.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "root",
  password: "Care1self!",
  database: "aa1nebb9sip7z5v"
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
