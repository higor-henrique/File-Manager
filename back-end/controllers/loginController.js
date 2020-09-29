const mongoose = require('mongoose');
console.log('teste')
class loginController {
  static async read(req, res){
    try {
      
      const response = await mongoose.model('user').find()

      return res.send({ response });

    } catch (error) {
      res.status(error.status).send(error.data)
    }

  }
  static async create(req, res){
    try {
      const response = mongoose.model('user').create(req.body) 
      res.send({ response })
    } catch (error) {
      res.status(error.status).send(error.data)
    }
  }

}


module.exports = loginController