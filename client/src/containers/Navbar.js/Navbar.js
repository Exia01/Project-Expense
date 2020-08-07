import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

// CSS Styles
import '../../styles/NavbarStyles.css';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
export default class Navbar extends Component {
  render() {
    return (
      <Header>
        <div className='header-container'>
          <div className='logo'></div>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='1'>
              <Link to='/register'>Register</Link>
            </Menu.Item>
            <Menu.Item key='2'>
           
              <Link to='/Login'>Login</Link>
            </Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </div>
      </Header>
    );
  }
}
