// app.patch

const router = require('express').Router()
const File = require('../models/file.model')

const multerModule = require('../utils/multerStorage.js');
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
console.log(req.body == null)
    if (!req.body) {
        res.status(403).json({ message: 'No File Provided' })
    } else {
        multerModule.upload(req, res, (err) => {
            if (err) {
                console.log("Failed to Upload");
                res.status(403).json({ message: err })
            } else {
                console.log("** FILE UPLOADED **");
                res.status(403).json({ message: "Worked!" })
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