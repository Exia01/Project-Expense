import React, { Component } from 'react';
import axios from 'axios';



class FileClassUpload extends Component {
    state = {
        selectedFile: null
    }

    onChangeHandler = (e) => {

        // *** TESTING ---> Remove later //
        console.log("On change...");
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.files);
        console.log(e.target.files[0]);

        // Set file state
        this.setState({
            selectedFile: e.target.files[0]
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("On submit...");

        const data = new FormData();
        data.append('file', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('"http://localhost:8000/upload', { data })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    onClickHandler = (e) => {
        console.log('Clicked..');
    }

    render() {
        return (
            <div className="container">
                <h1>Upload CSV or Excel File:</h1>
                <form method="post" enctype="multipart/form-data">
                    <div className="file-field input-field">
                        <div class="btn blue lighten-2">
                            <span>Select File</span>
                            <input type="file" name="file" onChange={this.onChangeHandler}/>
                        </div>
                        <div class="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                    <div>
                        <button className="btn waves-effect waves-light" type="" onSubmit={this.onSubmitHandler} >Upload
                        </button>
                    </div>
                </form>
                <br/>
                <button className="btn waves-effect waves-light" type="" onClick={this.onClickHandler} >Push</button>
            </div>
        )
    }
}


export default FileClassUpload;