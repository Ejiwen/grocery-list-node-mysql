const express = require('express');
const app = express();
const cors = require('cors');
var db = require('./db');

var controllers = require('./controllers');

//const dotenv = require('dotenv');
//dotenv.config();

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

app.listen(3000, () => console.log('app is running'));