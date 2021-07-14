var db = require('../db/index.js');

  module.exports.getAll = (callback) => {
    console.log(db);

    db.query(`SELECT * FROM items`, (err, results) => {
      if(err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    })

  }
