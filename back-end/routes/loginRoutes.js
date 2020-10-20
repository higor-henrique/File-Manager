express = require('express');
const loginController = require('../controllers/loginController')
router = express.Router();

const User = require('../model/user')





router.get('/', async (req,res) =>  {
  try {

        console.log('requisição')
   
        const response = await User.find({});
        console.log('undefined?:',response)
        res.send({response});
  }
  catch(error) {
    console.log(error)
    res.status(error.status).send(error.data)
  }
});

router.post('/', async (req, res) => {
    try {                          
      const user = new User(req.body)

      response = await user.save;
        console.log(response)

      res.send({user});
      } catch (error) {
        console.log(error);
        res.status(error.status).send(error.data)
      }      

});
module.exports = router;


















