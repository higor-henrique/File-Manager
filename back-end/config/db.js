
const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://admin:admin@cluster0.5r0ce.mongodb.net/file-manager?retryWrites=true&w=majority`, {  
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    })
    .catch((err) => console.log("error: " + err))

    
const db = mongoose.connection

db.once('open', () => console.log("Banco de dados funcionando ..."))

module.exports = mongoose;