var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'cocococonut',
  password: 'password'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});