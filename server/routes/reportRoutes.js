const path = require('path')
const express = require('express')
const router = express.Router()
const multer = require('multer');
const multerModule = require('../utils/multerStorage.js');

//Multer Storage
router.get('/', (req, res) => {
  // res.render("../../client/public/views/generate/index");
  console.log("Hit Landing Page");
  res.status(200).json({ success: true });
});

router.post('/upload', (req, res) => {
  if (!req.body) {
    res.render('test', { msg: "No File Provided" })
  } 

  multerModule.upload(req, res, (err) => {
    if (err) {
      console.log("Failed to Upload");
      res.status(400).json(err);
    } else {
      console.log("** FILE UPLOADED **");
      return res.status(200).json({ msg: "File Uploaded Successfully"});
    }
  })
});


router.get('/add', (req, res) => {
  res.render('generate/index');
});

module.exports = router;
