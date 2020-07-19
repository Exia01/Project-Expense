const multer = require('multer');
const path = require('path');


//Set storage engine --> replace ability not implemented 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //could perform logic here if needed(location and other)
    cb(null, './client/public/uploads/');
  },
  filename: function (req, file, cb) {

    let name = file.originalname.split(".")[0]
    return cb(
      null,
      `${name}${Date.now()}${path.extname(file.originalname)}`
    );

  }
});



//Init upload
const upload = multer({
  storage: storage,  //using attributes from storage
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    // cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", file), false);
    checkFileType(file, cb)
  }
}).single('file')



function checkFileType(file, cb) {

  //Allowed extensions 
  const fileTypes = /.*\.xlsx|xls|csv|sheet|vnd.ms-excel/g
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
  //check mime type
  const mimeType = fileTypes.test(file.mimetype)
  if (mimeType && extName) {
    return cb(null, true);
  } else {
    // (Error("Excel or CSV format only!"), false);
    // return cb(null, false);
    return cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", file), false);
  }
}
module.exports = {
  storage: storage,
  upload,
}


// if wanting to catch multer errors: https://github.com/expressjs/multer#error-handling