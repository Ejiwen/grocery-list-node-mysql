var mysql = require('mysql');

module.exports.dbConnection = mysql.createConnection({
  host: 'localhost', // new line added
  user: 'root',
  password: '',
  database: 'grocery',
  insecureAuth : true
});


module.exports.dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to db');
  }
});


module.exports.getAll = (cb) => {
  module.exports.dbConnection.query('SELECT * FROM items', (err, results) => {
    if (err) {
      console.log(err);
    } else {
      cb(null,results);
    }
  });
}

module.exports.addItem = (reqBody, cb) => {
  module.exports.dbConnection.query(`INSERT INTO items(item, quantity) values ('${reqBody.item}', ${reqBody.quantity})`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      cb(null,'Item added');
    }
  });
}



// var mysql = require('mysql');

// module.exports.dbConnection = mysql.createConnection({
//   host: 'localhost', // new line added
//   user: 'root',
//   password: '',
//   database: 'grocery',
//   insecureAuth : true
// });


// module.exports.dbConnection.connect();

// module.exports.dbConnection.query(`INSERT INTO items (name, quantity) values ('heyyy', 5);`, function (err, rows, fields) {
//   if (err) console.log(err);

//   console.log('BRAVOOOOOOO !!!!');
// });