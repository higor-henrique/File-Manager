const mongoose = require("mongoose")
console.log('teeeeeeeeeeeeeeste')
mongoose.connect(`mongodb+srv://admin:admin@cluster0.5r0ce.mongodb.net/FileManager?retryWrites=true&w=majority`, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .catch((err) => console.log("error: " + err))

const db = mongoose.connection

db.once('open', () => console.log("Banco de dados funcionando ..."))


module.exports = mongoose;