import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    //Setup State
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');

    const onChange = (evt) => {
        setFile(evt.target.files[0]);
        setFilename(evt.target.files[0].name);
    }

    const onSubmit = async (evt) => {
        evt.preventDefault();
        //-- Create a new form OBJ
        const formData = new FormData();
        console.log(formData);
        //-- Add file to FORM OBJ
        formData.append('file', file);
        console.log(formData);

        try {
            const res = await axios.post('/upload', formData, {
                headers : {
                    'Content-Type':'multipart/form-data'
                }
            });

            console.log(res.data);
            // const { fileName, filePath } = res.data;
            console.log("File Uploading ...");

            //-- Reset State
            setFile('');
            setFilename('Choose File');
        } catch(err) {
            console.log(err);
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
                                value={filename}
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