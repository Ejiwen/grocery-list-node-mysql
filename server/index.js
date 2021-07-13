const express = require('express');
const app = express();
const cors = require('cors');
var parser = require('body-parser');
var db = require('./db');

var controllers = require('./controllers');

//const dotenv = require('dotenv');
//dotenv.config();
app.use(parser.json());
app.use('/',express.static('./client/dist'));

//app.get('/getAll', controllers.getAll);

app.get('/getAll', (request, response) => {
  db.getAll((err, data) => {
    if(err) {
      console.log('Error');
    } else {
      response.json(data);
    }
  });
})

app.post('/postItem', (request, response) => {
  db.addItem(request.body, (err, data) => {
    if(err) {
      console.log('Error');
    } else {
      response.json("Item Added");
    }
  });
})

app.delete(`/items/:id`, (request, response) => {
  const { id } = request.params;
  db.deleteItem(id, (err, data) => {
    if(err) {
      console.log('Error');
    } else {
      response.json("Item removed");
    }
  });
})

app.listen(3000, () => console.log('app is running'));