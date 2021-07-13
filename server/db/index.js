var mysql = require('mysql');

module.exports.dbConnection = mysql.createConnection({
  host: 'localhost', // new line added
  user: 'root',
  password: '',
  database: 'grocery'
});


module.exports.dbConnection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to db');
  }
});