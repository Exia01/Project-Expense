const path = require('path'),
  express = require('express'),
  router = express.Router(),
  multerModule = require('../utils/multerStorage.js');

//Multer Storage
router.get('/', (req, res) => {
  res.render('test');
});

router.post('/upload', (req, res) => {
  if(!req.body) {
    res.render('test', { msg: "No File Provided" })
  } else {
    multerModule.upload(req, res, (err) => {
      if (err) {
        console.log("Failed to Upload");
        res.render('test', { msg: err })
      } else {
        console.log("** FILE UPLOADED **");
        res.redirect('/')
      }
    })
  }
});

router.get('/add', (req, res) => {
  res.render('generate/index');
});

module.exports = router;
