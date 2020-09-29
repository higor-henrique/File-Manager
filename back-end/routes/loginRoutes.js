express = require('express');
const loginController = require('../controllers/loginController')
router = express.Router();
const db =  require('../config/db')

const mongoose = require('mongoose')
const User = require('../model/user')





router.get('/', async (req,res) =>  {
   
        const response = await User.find({});

        res.send({response});
});

router.post('/', async (req, res) => {
    try {                          
      const user = new User(req.body)

      user.save;

      res.send({user});
      } catch (error) {
        console.log(error);
        res.status(error.status).send(error.data)
      }      

});
module.exports = router;


















