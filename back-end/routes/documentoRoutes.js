const router = require('../controllers/documentoController');

express = require('express');
router = express.Router();

router.get('/', (req,res) => {
    res.json({hello : 'world'});
});