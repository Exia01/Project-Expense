const File = require('../models/file.model');

/* 
======================
Implement promise all or multiple error handling
https://stackoverflow.com/questions/45285129/any-difference-between-await-promise-all-and-multiple-await
====================== 
*/
class FileService {
  //index
  async file_index() {
    const data = await File.find({});
    return data;
  }

  //new
  async file_new(req, res, obj, next) {
    let file = await new File(obj).save();
    return file;
  }

  
}

module.exports = new FileService();
