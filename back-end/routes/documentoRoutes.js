
express = require('express');

router = express.Router();

router.get('/', async (req,res) => {
    res.json({hello : 'world'});
});



module.exports = router;