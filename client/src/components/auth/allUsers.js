import React, { Component } from 'react';
import axios from 'axios';


class allUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios
            .get('/api/users')
            .then(users => {
                console.log("Found Users...");
                console.log(users.data);
                this.setState({ users: users.data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render () {
        return (
            <div>
                <h1>All Users Class Component</h1>

            </div>
        )
    }

}


export default allUsers;
