import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';


const Users = () => {
    //-- Set State
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            let results = await axios.get('/api/users');
            console.log(results);
            console.log("*******");
            console.log(results.data);
            setUsers(results.data);
        }
        //-- Invoke Effect
        getUsers();
    }, [/* options */] );
    return (
        <Fragment>
            <h1>All Users</h1>
            {/* <p>{users}</p> */}
        </Fragment>
    )
}

export default Users;