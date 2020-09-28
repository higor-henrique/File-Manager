const documentoRoutes = require('../routes/documentoRoutes')

const express = require('express'),
app = express(),
port = 3000;
app.listen(port);


app.use('/documento', documentoRoutes);


console.log('Message RESTful API server started on: ' + port);