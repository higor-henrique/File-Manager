const documentoRoutes = require('../routes/documentoRoutes')
const loginRoutes = require('../routes/loginRoutes')

const express = require('express'),
app = express(),
port = 3000;
app.listen(port);


app.use('/documento', documentoRoutes);
app.use('/login', loginRoutes);

console.log('Message RESTful API server started on: ' + port);