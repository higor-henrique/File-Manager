
express = require('express');
const loginController = require('../controllers/loginController')
router = express.Router();

const User = require('../model/user')

router.get('/', async (req,res) =>  {
  try {             
       var response = await   User.find();
       res.send(response)
  }
  catch(error) {
    console.log(error)
    res.status(error.status).send(error.data)
  }
});

router.post('/', async (req, res) => {
    try {                          
      var user = new User(req.body);
      

      user.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('meow');
        }
      });
      
      } catch (error) {
        console.log(error);
        res.status(error.status).send(error.data)
      }      

});
module.exports = router;













  
// const controllerUser = require('../controller/controllerUser')
// const controllerAuth = require('../controller/controllerAuth')
// const controllerTask = require('../controller/controllerTask')

// module.exports = class UserRouter {
//   constructor(app) {
//     app.route('/user')
//       .get(controllerUser.getUserAll)

//     app.post('/authenticate', controllerAuth.authenticate)
//     app.post('/register', controllerAuth.registerUser)

//     app.route('/user/:id')
//       .get(controllerUser.getUserId)
//       .delete(controllerUser.removeUser)
//       .put(controllerUser.updateUser)



//   }
// }



