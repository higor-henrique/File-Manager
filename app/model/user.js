const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
nome: {
    type: String,
    require: true,
},
email: {
    type: String,
    require: true,
    lowercase: true,
},
telefone: {
  type: Number,
},
data : {
    type: Date,
    default: Date.now(),
},
});
const User = mongoose.model("user" , UserSchema)

module.exports = User;



