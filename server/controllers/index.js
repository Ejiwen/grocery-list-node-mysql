//var db = require('../db/index.js');
var models = require('../models');

module.exports = {
  getAll: function (req, res) {
    models.getAll((err, data) => {
      if(err) {
        console.log('ERROR');
      } else {
        res.send(data);
      }
    });
  }
}