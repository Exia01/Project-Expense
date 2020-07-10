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
  async file_new(obj) {
    const file = await new File(obj).save();
    return file;
  }

  // Find
  async file_find(id) {
    const file = await File.findById(id);
    return file;
  }
  
  //Delete
  async file_delete(id) {
    const file = await File.findOneAndRemove(id);
    return file;
  }

}

module.exports = new FileService();
