var db = require('../db/index.js');

  module.exports = {
    getAll: function(callback) {
      db.query(`SELECT * FROM items`, (err, results) => {
        if(err) {
          console.log(err);
        } else {
          callback(null, results);
        }
      })
    },

    addItem: function(reqBody,callback) {
      db.query(`INSERT INTO items(item, quantity) values ('${reqBody.item}', ${reqBody.quantity})`, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          callback(null,'Item added');
        }
      });
    },

    deleteItem: function(id, callback) {
      db.query(`DELETE FROM items WHERE id = ${id}`, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          callback(null,'Item removed');
        }
      });
    },

    changeItem: function(id, updatItem, callback) {

    //console.log(id);
    //console.log('-------------');
    //console.log(updatItem);

      db.query(`UPDATE items SET item = '${updatItem}' WHERE id = ${id}`, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          callback(null,'Item Edited');
        }
      });
    }


  }

/*
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