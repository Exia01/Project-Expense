const path = require('path'),
  express = require('express'),
  router = express.Router(),
  multerModule = require('../utils/multerStorage.js');

//Multer Storage

router.get('/', (req, res) => {
  // res.render('test');
  res.render('test');
});

router.post('/upload', (req, res) => {
  multerModule.upload(req, res, (err) => {
    if (err) {
      console.log("Failed to Upload");
      res.render('test', {msg:err})
    } else {
      console.log("** FILE UPLOADED **");
      console.log(req.file);
      res.redirect('/')
    }
  })
});

module.exports = router;
