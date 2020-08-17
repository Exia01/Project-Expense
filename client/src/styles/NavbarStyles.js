import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    backgroundColor: (theme) => theme.currentTheme == 'dark' ? '#000' : 'white'
    // backgroundColor: 'var(--main-dark-bg-color)',
  },
  logo: {
    height: '50px',
    backgroundColor: 'lightgreen',
    width: '200px',
  },
});
// const useStyles = createUseStyles(theme => ({
//   root: {
//     backgroundColor: theme.bg
//     // backgroundColor: 'var(--main-dark-bg-color)',
//   },
//   logo: {
//     height: '50px',
//     backgroundColor: 'lightcoral',
//     width: '200px',
//   },
// }));


export default useStyles;
