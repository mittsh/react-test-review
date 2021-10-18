import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    table: { borderCollapse: 'collapse', width: '100%' },
    tr: {
        '&:hover': {
            backgroundColor: '#ecf0f1',
        },
    },
    th: {
        backgroundColor: '#95a5a6',
        color: 'white',
    },
    td: {
        verticalAlign: 'top',
        border: '1px solid #bdc3c7',
        padding: '10px',
        '&:first-child': {
            width: '25px',
        },
    },
    infoHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
