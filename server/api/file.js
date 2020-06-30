// router.patch
const router = require('express').Router();
const fs = require('fs')
const File = require('../models/file.model');
const multer = require('multer')
const multerModule = require('../utils/multerStorage.js');
const fileService = require('../services/file');

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

// router.route('/').get(getAllFiles);


//Download
router.route('/:id').delete((req, res, next) => {
    fileService.file_find(req).then(foundFileObj => fileService.file_delete(foundFileObj.id))
        .then(deletedFoundObj => {
            try {
                fs.unlinkSync(`${deletedFoundObj.fileLocation}`)
                return res.status(200).json(
                    { status: "true", message: 'FileDeleted', deleted: deletedFoundObj }
                )
                //file removed
            } catch (err) {
                console.error("Embedded err", err.message)
                return res.status(500).json({ status: "false", message: 'Something went sideways', deletedFoundObj: deletedFoundObj })
            }

        }).catch(err => {
            console.log("Catch all err, ", err.message);
            return res.status(404).json({ err: err.message })
        })

})



//Delete
router.route('/:id').delete((req, res, next) => {
    fileService.file_find(req).then(foundFileObj => fileService.file_delete(foundFileObj.id))
        .then(deletedFoundObj => {
            try {
                fs.unlinkSync(`${deletedFoundObj.fileLocation}`)
                return res.status(200).json(
                    { status: "true", message: 'FileDeleted', deleted: deletedFoundObj }
                )
                //file removed
            } catch (err) {
                console.error("Embedded err", err.message)
                return res.status(500).json({ status: "false", message: 'Something went sideways', deletedFoundObj: deletedFoundObj })
            }

        }).catch(err => {
            console.log("Catch all err, ", err.message);
            return res.status(404).json({ err: err.message })
        })

})


//Upload
router.post('/', function (req, res) {
    multerModule.upload(req, res, function (err) {
        // could also combine this try catch with finally and either send err or message
        if (err instanceof multer.MulterError) {
            //Call Error service producer
            console.log('First Error type', err)
            return res.status(403).json({ err });
        } else if (err) {
            // An unknown error occurred when uploading.
            console.log('Second Error type', err)
            return res.status(403).json({ status: "false", err: err.message });
        }
        const tempFile = req.file;
        if (!tempFile) {
            return res.status(403).json({
                status: false,
                data: 'No file provided.'
            });
        }

        let newFileDoc = {
            name: tempFile.filename,
            originalName: tempFile.originalname,
            fileLocation: tempFile.path,
            size: tempFile.size,
            mimeType: tempFile.mimetype,
            date: Date.now(),
            isActive: true,
        }
        // // If upload successful
        fileService.file_new(newFileDoc).then(newFileObj => {
            // console.log("Inside fileService", tempFile);
            // console.log(newFileObj);
            res.json({
                status: true,
                message: 'File Uploaded',
                data: {
                    name: tempFile.originalname,
                    mimetype: tempFile.mimetype,
                    size: tempFile.size,
                    newFileObj
                }
            })
        }).catch(err => {
            // mongo db errors
            res.status(403).json({ err: err.errors })
        })


    })
})

// //SIMPLE IMPLEMENTATION
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


// // PREVIOUS VERSION
// router.post('/upload', multerModule.upload.single('testfile'), async (req, res, next) => {
//     const tempFile = req.file;
//     if (!tempFile) {
//         return res.status(400).json({
//             status: false,
//             data: 'No file provided.'
//         });
//     }
//     try {
//         let newFileDoc = {
//             name: tempFile.filename,
//             originalName: tempFile.originalname,
//             fileLocation: tempFile.path,
//             size: tempFile.size,
//             mimeType: tempFile.mimetype,
//             date: Date.now(),
//             isActive: true,
//         }
//         fileService.file_new(req, res, newFileDoc, next).then(newFile => {
//             console.log("Inside fileService", tempFile);
//             res.json({
//                 status: true,
//                 message: 'File Uploaded',
//                 data: {
//                     name: tempFile.originalname,
//                     mimetype: tempFile.mimetype,
//                     size: tempFile.size
//                 }
//             })
//         }).catch(err => {
//             log("embedded catch error")
//             res.status(403).json({ err })
//         })
//     } catch (err) {
//         if (err instanceof multer.MulterError) {
//             console.log("MULTER ERROR");
//         }
//         console.log("Error!!!!", err);
//         res.status(403).json({ err });
//     }
// });

//OLD IMPLEMENTATION
// router.post('/upload', multerModule.upload.single('testfile'), async (req, res, next) => {
//     try {
//         const tempFile = req.file;
//         // console.log(req.file);
//         // make sure file is available
//         if (!tempFile) {
//             res.status(400).json({
//                 status: false,
//                 data: 'No file provided.'
//             });
//         } else {
//             res.json({
//                 status: true,
//                 message: 'File is uploaded.',
//                 data: {
//                     name: tempFile.originalname,
//                     mimetype: tempFile.mimetype,
//                     size: tempFile.size
//                 }
//             });
//         }

//     } catch (err) {
//         console.log("Error!!!!", err);
//         res.status(500).json({ err });
//     }
// });

// router
//   .route('/api/file/:id')
//   .get(getFile)
//   .put(updateFile)
//   .delete(deleteFile);

module.exports = router;

// https://zellwk.com/blog/async-await-express/


// https://blog.bitsrc.io/uploading-files-and-images-with-vue-and-express-2018ca0eecd0