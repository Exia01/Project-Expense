import React, { Component, Fragment } from 'react';

const Navigation = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-2">
                <div className="container">
                    <a href="#" className="brand-logo offset-s1">Expense IT</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Upload</a></li>
                        <li><a href="#">Review</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;