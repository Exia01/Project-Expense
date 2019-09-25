import React, { Component, Fragment, useState } from 'react';
import axios from 'axios';

// class FileUpload extends Component { // }
const FileUpload = () => {
    //Setup State
    var state = {
        file: null
    }

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');

    const onChange = (e) => {
    // onChange = (e) => {

        setFile(e.target.files[0])
        setFilename(e.target.files[0].name);

        console.log('*********')
        // console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        // console.log(e.srcElement, '$$$');
        console.log(e.target.files[0]);
    }

    const onSubmit = async e => {
    // onSubmit = async e => {
        e.preventDefault();
        console.log('entering submit ...');
        const formData = new FormData();

        console.log('*********')
        // console.log(e);
        console.log(this.state);


        // formData.append('file', file);
        // console.log(formData);

        // try {
        //     const res = await axios.post('/upload', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     });

        //     console.log(res.data);
        //     console.log("*********");
        //     // Pull out the fileName and filePath from the Response.data
        //     const { fileName, filePath } = res.data;
        //     setUploadedFile({ fileName, filePath });

        //     setFilename("Choose File");
        //     console.log('File Uploaded');
        // } catch (err) {
        //     if (err.response.status === 500) {
        //         console.log("There was a problem from the server");
        //     } else {
        //         console.log(err.response.data.msg);
        //     }
        // }
    };

    // render() {
    return (
        <Fragment>
            <div className="container">
                <h1>Upload CSV or Excel File:</h1>
                <form method="post" onSubmit={onSubmit} enctype="multipart/form-data">
                    <div class="file-field input-field">
                        <div class="btn blue lighten-2">
                            <span>Select File</span>
                            <input type="file" onChange={onChange}  />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                    </div>
                    <div>
                        <button class="btn waves-effect waves-light" type="submit" onSubmit={onSubmit}>Submit
                            <i class="material-icons right send"></i>
                        </button>
                    </div>
                </form>
            </div>
            <br/>
        </Fragment>
    )
    // }
}

export default FileUpload;