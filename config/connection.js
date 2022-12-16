const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "RhailuGod83",
  database: 'employeeDb'
});





module.exports = connection;