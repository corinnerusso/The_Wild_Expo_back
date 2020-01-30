const mysql = require("mysql");
// require("dotenv").config();

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "wildexpo"
});
module.exports = connection;
