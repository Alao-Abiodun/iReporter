const mysql = require("mysql2");
require("dotenv").config();

const { DB_PASS, DB_NAME } = process.env;

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abiodun@96",
  database: "ireporterdb",
});

module.exports = connection;
