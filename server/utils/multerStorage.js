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
    cb(
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
    console.log("file upload: ", file)
    checkFileType(file, cb)

    // To reject this file pass `false`, like so:
    // cb(null, false)
  }
}).single('testfile')//from the input field, uploading 'This' file




function checkFileType(file, cb) {
  console.log("Checking File Type, ", file);
  if (!file) {
    cb('No File Provided!');
  }
  //Allowed extensions 
  const fileTypes = /.*\.xlsx|xls|csv|sheet|vnd.ms-excel/g
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
  //check mime type
  const mimeType = fileTypes.test(file.mimetype)
  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb('Excel or CSV format only!');
  }
}
module.exports = {
  storage: storage,
  upload,
}