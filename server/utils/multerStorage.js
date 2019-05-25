const multer = require('multer');
const path = require('path');
//Set storage engine
const storage = multer.diskStorage({
  destination: './client/public/uploads/',
  filename: function(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

//Init upload
const uploadProcess = (req, res) => {
  const upload = multer({
    storage: storage,  //using attributes from storage
    limits: {fileSize: 1000000},
    fileFilter: (req, file, (cb) => {
      checkFileType(file, cb)
    })
  }).single('testfile')//from the input field

  const checkFileType = (file, cb) => {
    //Allowed extensions 
    fileTypes = /xls|cvs|xlsx/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
    //check mime type
    const mimeType = fileTypes.test(file.mimetype)
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Excel or CSV format only!');
    }
  }
}
module.exports = {
    storage: storage,
    uploadProcess:uploadProcess
}