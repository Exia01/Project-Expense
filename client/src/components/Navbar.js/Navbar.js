import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Layout, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

// CSS Styles And Components
// import '../../styles/NavbarStyles.css';
import useStyles from '../../styles/NavbarStyles';
import { useTheme } from 'react-jss';
import { ThemeContext } from '../../contexts/theme.context';

export default function Navbar(props) {
  // / Creating a namespaced theming object.
  // const theme = useTheme()
  // const classes = useStyles({ ...props, theme })
  const themeProps = useContext(ThemeContext);
  const classes = useStyles(themeProps);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };
  const hideDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <header className={classes.root}>
      <Drawer
        // title='Basic Drawer'
        placement='right'
        closable={false}
        onClose={hideDrawer}
        visible={isDrawerVisible}
      >
        <p onClick={hideDrawer}>
          <Link to='/register'>Register</Link>
        </p>

        <p onClick={hideDrawer}>
          <Link to='/login'>Login</Link>
        </p>
      </Drawer>
      <div className={`container-fluid ${classes.navbar}`}>
        <div className={classes.logo}>
          <Link to='/'>Home</Link>
        </div>
        <ul className={classes.navBarMenu}>
          <li>
            <NavLink exact to='/register' className={'navlink'}>
              register
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/login' className={`navlink`}>
              Login
            </NavLink>
          </li>
        </ul>
        <div className={classes.hamburgerMenu}>
          <MenuOutlined onClick={showDrawer} />
        </div>
      </div>
    </header>
  );
}
