var models = require('../models');
var db = require('../db');

// var grocerylist = [
//   { item: 'Banana', quantity: 1 },
//   { item: 'Onion', quantity: 1 },
//   { item: 'Garlic', quantity: 1 },
//   { item: 'Olive oil', quantity: 1 },
//   { item: 'french bread', quantity: 1 },
// ]

exports.getAll = (req, res) => {
  models.getAll((err, data) => {
    if(err) {
      console.log('ERROR');
    } else {
      res.send(grocerylist);
    }
  });
}

