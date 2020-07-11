// router.patch
const router = require('express').Router();
const fs = require('fs')
const File = require('../../models/file.model');
const multer = require('multer')
const multerModule = require('../../utils/multerStorage.js');
const fileService = require('../../services/file');


const getAllFiles = (req, res) => {
    try {
        fileService.file_index().then(foundFiles => {
            return res.status(200).json(
                { status: "true", message: 'Files found', files: foundFiles }
            )
        })
    } catch (e) {
        return res.status(404).json({ err: err.message })
    }
};


//Index
router.route('/').get(getAllFiles);

//Create
router.post('/', function (req, res, next) {
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

//Find by ID
router.route('/:id').get((req, res, next) => {
    fileService.file_find(req.params.id)
        .then(foundFileObj => {
            if (!foundFileObj) {
                throw new Error('Not Found')
            }
            return res.status(200).json(
                { status: "true", message: 'File Found', file: foundFileObj }
            )
        }).catch(err => {
            console.log("Catch all err, ", err);
            return res.status(404).json({ status: false, err: err.message })
        })

})

//Delete
router.route('/:id').delete((req, res, next) => {
    fileService.file_delete(req.id)
        .then(deletedFoundObj => {
            try {
                fs.unlinkSync(`${deletedFoundObj.fileLocation}`)
                return res.status(200).json(
                    { status: "true", message: 'FileDeleted', deleted: deletedFoundObj }
                )
                //file removed
            } catch (err) {
                let message = "Something went sideways"
                console.error("Embedded err", err.message)
                if (!deletedFoundObj) {
                    message = 'File not found or it has already been deleted' //at some point we could implement at soft delete option
                }
                return res.status(500).json({ status: "false", message, deletedFoundObj: deletedFoundObj })
            }

        }).catch(err => {
            console.log("Catch all err, ", err.message);
            return res.status(404).json({ err: err.message })
        })

})

//Download
router.route('/:id/download').get((req, res, next) => {
    fileService.file_find(req.params.id)
        .then(foundFileObj => {
            if (!foundFileObj) {
                throw new Error('Not Found')
            }

            return res.download(foundFileObj.fileLocation, foundFileObj.originalName, function (err) {
                if (err) {
                    // Handle error, but keep in mind the response may be partially-sent
                    // so check res.headersSent
                    console.log(err);
                    throw new Error('Something went sideways')

                } else {
                    // decrement a download credit, etc.
                    console.log("Success!");

                }
            })


        }).catch(err => {
            console.log("Catch all err, ", err);
            return res.status(404).json({ status: false, err: err.message })
        })
})


// router
//   .route('/api/file/:id')
//   .get(getFile)
//   .put(updateFile)
//   .delete(deleteFile);

module.exports = router;

// https://zellwk.com/blog/async-await-express/


// https://blog.bitsrc.io/uploading-files-and-images-with-vue-and-express-2018ca0eecd0