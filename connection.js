// DEPENDENCIES
const mysql = require('mysql');

// CONNECTING TO MYSQL
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employeeTracker_DB'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ');
});
