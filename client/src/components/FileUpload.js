import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    //Setup State
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState('');

    const onChange = (evt) => {
        setFile(evt.target.files[0]);
        setFileName(evt.target.files[0].name);
    }

    const onSubmit = async (evt) => {
        evt.preventDefault();
        //-- Create a new form OBJ
        const formData = new FormData();
        //-- Add file to FORM OBJ
        formData.append('file', file);

        try {
            const res = await axios.post('/upload/route', formData, {
                headers : {
                    'Content-Type':'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data;
            console.log("File Uploaded!!");
            setUploadedFile({ fileName, filePath });
        } catch(err) {

        }
    }

    return (
        <Fragment>
            <div className="container">
                <h1>Upload CSV or Excel File:</h1>
                <form onSubmit={onSubmit}>
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Select File</span>
                            <input 
                                type="file"
                                name="file-select"
                                onChange={onChange} />
                        </div>
                        <div className="file-path-wrapper">
                            <input 
                                className="file-path validate" 
                                type="text"
                                name='file-path'
                                onChange={onChange} />
                        </div>
                    </div>
                    <button className="btn" type="submit">Upload</button>
                </form>
            </div>
            <br/>
        </Fragment>
    )
}

export default FileUpload;