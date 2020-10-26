
express = require('express');

router = express.Router();

router.get('/', async (req,res) => {
    res.render('index.ejs');
});



module.exports = router;