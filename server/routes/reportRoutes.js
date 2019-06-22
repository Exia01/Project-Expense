const path = require('path'),
  express = require('express'),
  router = express.Router(),
  multerModule = require('../utils/multerStorage.js');

//Multer Storage

router.get('/', (req, res) => {
  res.render('test');
});
router.post('/upload', (req, res) => {
  multerModule.upload(req, res, (err) => {
    if (err) {
    res.render('test', {msg:err})
    } else {
      // console.log(req.file)
      res.redirect('/')
    }
  })
});

module.exports = router;
