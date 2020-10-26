const User = require('../model/user')

module.exports = class loginController {
  static async login(req, res) {
    const {
      email,
      password
    } = req.body

    try {
      var user = new User(req.body);
      
      if(user.findOne(email) != null) {
        console.log('logado');
      }      

    } catch (error) {
      console.log({
        error: "Error no authentication"
      })
      return res.status(500).send(error)
    }
  }

  static async register(req, res) {
    try {   
     
      user.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('meow');
        }
      });

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        error: error.errorUser
      })
    }
  }
}