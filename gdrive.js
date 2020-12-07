const fs = require("fs");
const {google} = require('googleapis');

 console.log(google.drive.files)

function imageUpload(fileName, filePath, callback){
    require("./drive.js"); function auth(auth) {       
        const fileMetadata = {
            name: fileName
        };

        const media = {
            mimeType: "image/jpeg",
            body: fs.createReadStream(filePath)
        }
        
        const drive = google.drive({version: 'v3', auth});
        console.log(drive.files.list());

        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
          }, function (err, file) {
            if (err) {
              // Handle error
              console.error(err);


              
            } else {
              callback(file.data.id);
            }
          });

        }
}

imageUpload('imagem.jpg', './imagem.jpg', ((g)=> {
    // console.log("tttttttttttttttttttttttttt",g)
}));



module.exports = { imageUpload };