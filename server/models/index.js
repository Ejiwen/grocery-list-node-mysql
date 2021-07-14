var db = require('../db');

  module.exports.getAll = (callback) => {
    db.dbConnection.query(`SELECT * FROM items`, (err, results) => {
      if(err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    })
  }
