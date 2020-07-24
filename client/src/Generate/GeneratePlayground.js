import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";


class GeneratePlayground extends Component {
    state = {
        dataCols : [],
        dataRows : []
    };

    componentDidMount() {
        console.log("Mounting Component");
        axios.get('/read/convert')
            .then(dataFile => {
                console.log("Reading Test File");
                console.log(dataFile);

                this.setState({ dataRows: dataFile.data.gen });
            })
            .catch(err => {
                console.log(err);
            });
    }

    collectCols = () => {

    }

    render() {
        return (
            <div className="container">
                <h1>Testing Playground</h1>
            </div>
        )
    }
}

export default GeneratePlayground;