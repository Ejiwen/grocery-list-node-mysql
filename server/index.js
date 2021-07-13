const express = require('express');
const app = express();

var controllers = require('./controllers');

//const dotenv = require('dotenv');
//dotenv.config();

app.use('/',express.static('./client/dist'));

app.get('/getAll', controllers.getAll);

app.listen(3000, () => console.log('app is running'));