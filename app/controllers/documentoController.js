const drive =  require('../../drive')
const fs = require("fs");
const {google} = require('googleapis');
express = require('express');




router = express.Router();

function teste () {
    require("../../drive")((auth) => {
        const drive = google.drive({version: 'v3', auth});
        console.log(drive.files.list());
 
    });
}  


router.get('/', async (req,res) => {
    console.log(drive.drive);
    res.render('index.ejs');
    teste();
});


module.exports = router;