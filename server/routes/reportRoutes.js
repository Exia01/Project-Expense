const path = require('path'),
  express = require('express'),
  router = express.Router(),
  multerModule = require('../utils/multerStorage.js');

//Multer Storage

router.get('/', (req, res) => {
  // res.render("../../client/public/views/generate/index");
  console.log("Hit Landing Page");
  // res.status(200).json({ success: true });
  res.send("Landing Route");
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

router.get('/add', (req, res) => {
  res.send("Hit ADD");
});

module.exports = router;
