import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';

// CSS Styles And Components
import '../../styles/NavbarStyles.css';
const { Content } = Layout;
export default class Navbar extends Component {
  render() {
    return (
      <header>
        <div className='container-fluid navbar'>
          <div className='logo'></div>
          <ul className='navbar-menu'>
            <li>
              <NavLink exact to='/register' className={`test`}>
                register
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/login' className={`test`}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
