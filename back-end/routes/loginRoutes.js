express = require('express');

router = express.Router();

router.get('/', (req,res) => {
    res.json({hello : 'teste'});
});



module.exports = router;