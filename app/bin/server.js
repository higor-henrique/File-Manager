const documentoController = require('../controllers/documentoController');
const loginController = require('../controllers/loginController');
//const documentoController = require('app/controllers/documentoController');
//const documentoController = require('./app/controllers/documentoController');

var bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('../../config/db');



app = express(),
port = 3000;
app.listen(port);


app.set('view engine', 'ejs');

app.set('views', 'app/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/documento', documentoController);
app.use('/login', loginController);

console.log('Message RESTful API server started on: ' + port);
//Client ID
//482489181589-i22ti5mhf8qja97gqvfi19tjk5klbnv9.apps.googleusercontent.com
//Client SECRET
//7KoLCYF2hSKzWGfxW3GStTGe


//
///
//741835335557-g928j54ml09gnnlcojh1sd4k50qfe1sn.apps.googleusercontent.com
//
