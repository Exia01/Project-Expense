import { createUseStyles } from 'react-jss';
import size from './size';
const useStyles = createUseStyles({
  root: {
    padding: '1rem',
    backgroundColor: 'grey',
    color: 'white',
    '& li': {
      listStyle: 'none',
      margin: '0rem 1rem',
      '& .link-footer': {
        textDecoration: 'underline',
      },
    },
    '& ul': {
      display: 'flex',
      justifyContent: 'center',
      padding: 'initial',
      marginBottom: '1.25rem',
    },
  },
  logo: {
    height: '50px',
    backgroundColor: 'lightgreen',
    width: '200px',
    margin: '1rem auto',
  },
  footerMenu: {
    display: 'flex',
    justifyContent: 'center',
    // borderBottom: '1px solid #e9eaea',
    margin: '0 auto',
    '& li:last-child': {},
    '& a': {
      color: 'inherit',
      '&:hover': {
        color: '#ff0000',
      },
    },
  },
  footerBottom: {
    margin: '.5rem auto',
    fontSize: '1.5rem',
    margin: '0 auto',
    '& svg': {
      fill: 'white',
    },
    '& ul': {
      display: 'flex',
      // marginBottom: '0rem',
    },
  },
  [size.up('sm')]: {},
});

export default useStyles;
