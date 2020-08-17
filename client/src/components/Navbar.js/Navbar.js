import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { Layout } from 'antd';
// CSS Styles And Components
import '../../styles/NavbarStyles.css';

import useStyles from '../../styles/NavbarStyles';
import { useTheme } from 'react-jss';
import { ThemeContext } from '../../contexts/theme.context';
const { Content } = Layout;

export default function Navbar(props) {
  // / Creating a namespaced theming object.
  // const theme = useTheme()
  // const classes = useStyles({ ...props, theme })
  const themeProps = useContext(ThemeContext)
  console.log(themeProps);
  const classes = useStyles(themeProps)
  return (
    <header>
      <div className={`container-fluid navbar ${classes.root}`}>
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
