express = require('express');
const loginController = require('../controllers/loginController')
const user = require('../model/user')
router = express.Router();



router.get('/', async (req,res) =>  {
    console.log('t4e')
        const response = await loginController.read;

        res.send({response});
});

router.post('/', async (req, res) => {
    try {               
        return user = await user.create(req.body )
      } catch (error) {
        res.status(error.status).send(error.data)
      }      

});
module.exports = router;