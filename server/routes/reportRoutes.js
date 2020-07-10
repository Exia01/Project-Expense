const path = require('path')
const express = require('express')
const router = express.Router()

const multerModule = require('../utils/multerStorage.js');

//Multer Storage
router.get('/', (req, res) => {
  // res.render("../../client/public/views/generate/index");
  console.log("Hit Landing Page");
  // res.status(200).json({ success: true });
  res.send("Landing Route");
});

router.post('/upload', (req, res) => {
  if (!req.body) {
    res.render('test', { msg: "No File Provided" })
  } else {
    multerModule.upload(req, res, (err) => {
      if (err) {
        console.log("Failed to Upload");
        res.status(400).send({ err });
      } else {
        console.log("** FILE UPLOADED **");
        res.status(200).send({ req });
      }
    })
  }
});

router.get('/add', (req, res) => {
  res.render('generate/index');
});

module.exports = router;
