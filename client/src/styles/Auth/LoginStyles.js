import { createUseStyles } from 'react-jss';
import size from '../size';

const useStyles = createUseStyles({
  root: {
    // height: (props) => (props.form === 'login' ? '50vh' : '50vh'),
    height: '100%',
    '& .ant-row': {
      height: 'inherit',
    },
  },
  formTitle: {
    // flex: '1 100%'
  },
  formError: {
    color: '#b30000',
    fontWeight: 'bold',
  },
  submitBtn: {
    marginRight: '.5rem',
  },


  [size.up('sm')]: {
  },
  [size.up('md')]: {
  },
  [size.up('lg')]: {

  },
});

export default useStyles;
