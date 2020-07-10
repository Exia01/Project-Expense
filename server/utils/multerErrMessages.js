

const multerUploadErrorChecking = (err, req) => {
    const tempFile = req.file;
    let errorObj = null
    if (err instanceof multer.MulterError) {
        //Call Error service producer
        console.log('First Error type', err)
        errorObj = { status: "false", err };
    } else if (err) {
        // An unknown error occurred when uploading.
        console.log('Second Error type', err)
        errorObj = { status: "false", err: err.message };
    } else if (!tempFile) {
        errorObj = { status: false, data: 'No file provided.' }
    }
    // switch (err) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
    // if (err instanceof multer.MulterError) {
    //     let message = '';
    //     if (err.code === 'LIMIT_FILE_SIZE') { message = '' };
    //     if (err.code === 'LIMIT_FILE_COUNT') { message = '' };
    //     if (err.code === 'LIMIT_UNEXPECTED_FILE') { message = '' };
    //     return res.status(400).json({
    //         ok: false,
    //         message: message.length ? message : err.message
    //     })
    // }
    return errorObj
}