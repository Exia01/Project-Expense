const path = require('path'),
  express = require('express');
(router = express.Router()),multerModule = require('../utils/multerStorage.js');
//Multer Storage

router.get('/', (req, res) => {
  res.render('test');
});
router.post('/upload', (req, res) => {
  multerModule.uploadProcess(req, res, (err) => {
    if (err) {
    res.render('index', {msg:err})
    } else {
      console.log(req.file)
      res.redirect('/')
    }
  })
  res.send('test');
});

module.exports = router;
