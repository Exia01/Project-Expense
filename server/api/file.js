// router.patch
const router = require('express').Router();
const File = require('../models/file.model');
const fileService = require('../services/file')

const multerModule = require('../utils/multerStorage.js');
const getAllFiles = async (req, res, next) => {
    try {
        const data = File.find();
        if (!fileData) {
            const err = new Error('No files found');
            err.status = 404;
            throw err;
        }
        res.json(data);
    } catch (e) {
        next(e);
    }
};

router.route('/').get(getAllFiles);




// router.post('/upload', multerModule.upload.single('testfile'), (req, res, next) => {
//     console.log(req.file);
//     const tempFile = req.file
//     if (!tempFile) {
//         return res.status(400).json({
//             status: false,
//             data: 'No file provided.'
//         });
//     }
//     return res.json({
//         status: true,
//         message: 'File is uploaded.',
//         data: {
//             name: tempFile.originalname,
//             mimetype: tempFile.mimetype,
//             size: tempFile.size
//         }
//     });
// })

router.post('/upload', multerModule.upload.single('testfile'), async (req, res, next) => {
    try {
        const tempFile = req.file;
        // console.log(req.file);
        // make sure file is available
        if (!tempFile) {
            res.status(400).json({
                status: false,
                data: 'No file provided.'
            });
        } else {
            let newFileDoc = {
                name:tempFile.filename,
                isActive:true, 
                date: Date.now()
                // originalName: tempFile.originalname,
                // destination: tempFile.destination,
                // path: tempFile.path,
                // size: tempFile.size,
                // mimeType: tempFile.mimetype,
            }
            fileService.file_new(req, res, newFileDoc, next).then(newFile =>{
                res.json({
                    status: true,
                    message: 'File is uploaded.',
                    data: {
                        name: tempFile.originalname,
                        mimetype: tempFile.mimetype,
                        size: tempFile.size
                    }
                })
            }).catch(err=>{
                res.status(500).json({ err })
            })
            // res.json({
            //     status: true,
            //     message: 'File is uploaded.',
            //     data: {
            //         name: tempFile.originalname,
            //         mimetype: tempFile.mimetype,
            //         size: tempFile.size
            //     }
            // });
            // send response
        }

    } catch (err) {
        console.log("Error!!!!", err);
        res.status(500).json({ err });
    }
});

// router
//   .route('/api/v1/file/:id')
//   .get(getFile)
//   .put(updateFile)
//   .delete(deleteFile);

module.exports = router;

// https://zellwk.com/blog/async-await-express/
