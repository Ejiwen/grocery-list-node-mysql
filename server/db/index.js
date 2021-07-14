var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  host: 'localhost', // new line added
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
/*

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

module.exports.deleteItem = (id, cb) => {
  module.exports.dbConnection.query(`DELETE FROM items WHERE id = ${id}`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      cb(null,'Item removed');
    }
  });
}

module.exports.changeItem = (id, updatItem, cb) => {
  module.exports.dbConnection.query(`UPDATE items SET item = '${updatItem}' WHERE id = ${id}`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      cb(null,'Item removed');
    }
  });
}
*/