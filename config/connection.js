const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'employees'
});


connection.connect(function(err) {
    if (err) throw err;
    startApp();
  });


module.exports = connection;