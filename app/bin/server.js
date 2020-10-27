const documentoController = require('../app/controllers/documentoController');
const loginController = require('../app/controllers/loginController');
var bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('../app/config/db');

app = express(),
port = 3000;
app.listen(port);


app.set('view engine', 'ejs')
app.set('views', '../views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/documento', documentoController);
app.use('/login', loginController);

console.log('Message RESTful API server started on: ' + port);
//Client ID
//482489181589-i22ti5mhf8qja97gqvfi19tjk5klbnv9.apps.googleusercontent.com
//Client SECRET
//7KoLCYF2hSKzWGfxW3GStTGe