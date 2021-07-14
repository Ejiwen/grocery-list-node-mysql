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
  },
  postItem: function(req, res) {
    models.addItem(req.body, (err, data) => {
      if(err) {
        console.log('Error');
      } else {
        res.json("Item Added");
      }
    });
  },

  deleteItem: function(req, res) {
    const { id } = req.params;
    models.deleteItem(id, (err, data) => {
      if(err) {
        console.log('Error');
      } else {
        res.json("Item removed");
      }
    });
  },

  changeItem: function(req, res) {
    let { id } = req.params;
    let { updatItem } = req.params;
    console.log(id);
    models.changeItem(id, updatItem, (err, data) => {
      if(err) {
        console.log('Error');
      } else {
        res.json("Item removed");
      }
    });
  }

}


/*
app.put(`/item/:id:updatItem`, (request, response) => {
  const { id } = request.params;
  const { updatItem } = request.params;
  db.changeItem(id, updatItem, (err, data) => {
    if(err) {
      console.log('Error');
    } else {
      response.json("Item removed");
    }
  });
})
*/