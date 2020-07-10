
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

