import { createUseStyles } from 'react-jss';
import size from './size';

const useStyles = createUseStyles({
  "@global": {
    ".active.navlink": {
      color: 'black',
    }
  },
  root: {
    backgroundColor: (theme) =>
      theme.currentTheme === 'dark' ? theme.dark.bg : theme.light.bg,
    // color: (theme) => (theme.currentTheme === 'dark' ? '#000' : 'white'),
  },
  navbar: {
    display: 'flex',
    width: '100%',
    // was 100em
    // maxWidth: '73vw',
    padding: '1rem',
    justifyContent: 'space-between'
  },
  navBarMenu: {
    display: 'flex',
    padding: 'initial',
    display: 'none',
    // marginLeft: '0',
    '& li': {
    },
  },
  logo: {
    width: '120px',
    height: '31px',
    backgroundColor: 'rgba(13, 13, 13, 0.2);',
  },
  hamburgerMenu: {
    display: 'block',
    justifySelf: 'end',
    color: (theme) => (theme.currentTheme === 'dark' ? 'lightgrey' : 'black'),
  },
  [size.up('sm')]: {
  },
  [size.up('md')]: {
    hamburgerMenu: {
      display: 'none'
    },
    navBarMenu: {
      // display: 'block'
    },
    navbar: {
      display: 'flex',
      width: '100%',
      // was 100em
      maxWidth: '90vw',
      padding: '1rem',
    },
    navBarMenu: {
      display: 'flex',
      // marginLeft: '0',
      '& li': {
        display: 'inline-block',
        listStyle: 'none',
        minWidth: '40px',
        margin: '0 1rem',
      },
      // '& $hamburgerMenu': {
      //   [size.up('md')]: {
      //     display: 'none',
      //   },
      // },
      '& a': {
        textTransform: 'uppercase',
        // color: (theme) => (theme.currentTheme === 'dark' ? 'lightgrey' : 'lightgrey'),
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
        '&:hover': {
          '&:after': {
            width: '100%',
            background: "#444"
          }
        },
        '&:after': {
          content: '""',
          display: 'block',
          margin: 'auto',
          height: '3px',
          width: 0,
          background: 0,
          transition: 'width 0.5s ease, background-color 0.5s ease',
        }
      }
    },
  },
  [size.up('lg')]: {
    navbar: {
      display: 'flex',
      width: '100%',
      // was 100em
      maxWidth: '73vw',
      padding: '1rem',
    },
   
  },


});

export default useStyles;
