const documentoRoutes = require('../routes/documentoRoutes');
const loginRoutes = require('../routes/loginRoutes');
var bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('../config/db');

app = express(),
port = 3000;
app.listen(port);


app.set('view engine', 'ejs')
app.set('views', '../views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/documento', documentoRoutes);
app.use('/login', loginRoutes);

console.log('Message RESTful API server started on: ' + port);