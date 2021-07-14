const express = require('express');
const app = express();
const cors = require('cors');
var parser = require('body-parser');
var db = require('./db/index.js');

var controllers = require('./controllers');

//const dotenv = require('dotenv');
//dotenv.config();
app.use(parser.json());
app.use('/',express.static('./client/dist'));

//app.get('/getAll', controllers.getAll);

app.get('/getAll', controllers.getAll);

app.post('/postItem', controllers.postItem);

app.delete(`/items/:id`, controllers.deleteItem);

app.put(`/item/:id:updatItem`, controllers.changeItem)

app.listen(3000, () => console.log('app is running on port 3000'));