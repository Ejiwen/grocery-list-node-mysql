const express = require('express');
const app = express();
const dotenv = require('dotenv');
//dotenv.config();

app.use('/',express.static('./client/dist'));

// app.get('/', (req,res) => {
//   res.send("HEY !!!!");
// })

app.listen(3000, () => console.log('app is running'));