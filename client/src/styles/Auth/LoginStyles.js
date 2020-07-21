import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root: {
        height: (props) => (props.form === 'login' ? '75vh' : '70vh'),

        // display: 'flex',
        // maxWidth: '50vw',
        // margin: '5rem auto 0 auto ',
        // flexFlow: 'wrap'
        '& .ant-row': {
            height:'inherit',
        }
    },
    formTitle: {
        // flex: '1 100%'
    },
    submitBtn: {
        marginRight: '.5rem'
    }
});

export default useStyles