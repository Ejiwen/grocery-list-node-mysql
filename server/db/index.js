var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'grocery',
  insecureAuth : true
});


dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to db');
  }
});

module.exports = dbConnection;