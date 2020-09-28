
  express = require('express');

router = express.Router();

router.get('/', (req,res) => {
    res.json({hello : 'world'});
});



module.exports = router;