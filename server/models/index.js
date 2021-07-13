var db = require('../db');

  exports.getAll = (callback) => {
    db.query(`SELECT * FROM items`, (err, results) => {
      if(err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    })
  }
