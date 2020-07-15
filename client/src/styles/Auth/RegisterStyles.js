import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        maxWidth: '50vw',
        margin: '5rem auto 0 auto ',
        flexFlow: 'wrap'
    },
    formTitle: {
        flex: '1 100%'
    }
});

export default useStyles