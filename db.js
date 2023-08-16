var mysql = require("mysql");
var con;

function connectToDatabase() {
  con = mysql.createConnection({
    host: process.env.MYSQL_HOST || "mysql",
    user: process.env.MYSQL_USER || "username",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "db",
    port: process.env.MYSQL_PORT || 3307,
  });

  con.connect(function (err) {
    if (err) {
      console.error("Error connecting to the database:", err.message);
      // Retry the connection after a delay (e.g., 5 seconds)
      setTimeout(connectToDatabase, 5000);
      return;
    }
    console.log("Database connected!");
  });
}

connectToDatabase();
var mysql = require("mysql");
var con;

function connectToDatabase() {
  con = mysql.createConnection({
    host: process.env.MYSQL_HOST || "mysql",
    user: process.env.MYSQL_USER || "username",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "db",
    port: process.env.MYSQL_PORT || 3306,
  });

  con.connect(function (err) {
    if (err) {
      console.error("Error connecting to the database:", err.message);
      // Retry the connection after a delay (e.g., 5 seconds)
      setTimeout(connectToDatabase, 5000);
      return;
    }
    console.log("Database connected!");
  });
}

connectToDatabase();
