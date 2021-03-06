import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    //Setup State

    return (
        <Fragment>
            <div className="container">
                <h1>Upload CSV or Excel File:</h1>
                <form action="#">
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>Select File</span>
                            <input type="file" />
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