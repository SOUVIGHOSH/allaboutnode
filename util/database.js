const mysql = require("mysql2");

// this creates a connection pool so we don't need to connect
const pool = mysql.createPool({
  host: "localhost",
  database: "mysql",
  user: "root",
  password: "mysqlroot",
});

module.exports = pool.promise();
