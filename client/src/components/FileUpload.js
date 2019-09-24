import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    //Setup State
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadFile, setUploadFile] = useState({});
    const [message, setMessage] = useState('');

    const onChange = (e) => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name);
    }



    return (
        <Fragment>
            <div className="container">
                <h1>Upload CSV or Excel File:</h1>
                <form action="#">
                    <div class="file-field input-field">
                        <div class="btn blue lighten-2">
                            <span>Select File</span>
                            <input type="file" onChange={onChange} />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                    </div>
                </form>
            </div>
            <br/>
        </Fragment>
    )
}

export default FileUpload;