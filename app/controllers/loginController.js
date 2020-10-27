
express = require('express');
router = express.Router();

const User = require('../model/user')

router.get('/', async (req,res) =>  {
  try {             
    res.render('index.ejs');
  }
  catch(error) {
    console.log(error)
    res.status(error.status).send(error.data)
  }
});

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
      console.log(req.body)                    
      var user = new User(req.body);  
      user.save()  
      
       res.send(user)
      } catch (error) {
        console.log(error);
        res.status(error.status).send(error.data)
      }      

});
module.exports = router;

