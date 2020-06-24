// app.patch

const router = require('express').Router()
const File = require('../models/file.model')

const getAllFiles = async (req, res, next) => {
    try {
        const data = File.find()
        if (!fileData) {
            const err = new Error('No files found');
            err.status = 404;
            throw err;
        }
        res.json(data);
    } catch (e) {
        next(e);
    }
}


router.route('/').get(getAllFiles)

router.route('/upload').post((req, res) => {
    if (!req.body) {
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
})


// router
//   .route('/api/v1/file/:id')
//   .get(getFile)
//   .put(updateFile)
//   .delete(deleteFile);

module.exports = router