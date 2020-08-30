import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    // display: 'flex',
    // maxWidth: '50vw',
    marginTop: '1rem',
    '& form': {
      marginBottom: '1rem'
    }
  },
  formGroup: {},
  formTitle: {
    flex: '1 100%',
  },
  formLabel: {
    display: 'inline-block',
    marginBottom: '.5rem',
  },
  formError: {
    borderColor: '#ff4d4f',
    color: '#ff4d4f',
    minHeight: '24px',
    transition: "color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  submitBtn: {
    // marginTop: '',
  },
});

export default useStyles;
