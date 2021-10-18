import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        marginRight: '10px',
        marginLeft: '10px',
    },
    checkbox: {
        marginRight: '15px',
    },
});
