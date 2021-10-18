import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    root: { display: 'flex', alignItems: 'center' },
    title: { fontWeight: 'bold' },
    highlighted: {
        color: 'inherit',
        fontStyle: 'inherit',
        fontSize: 'inherit',
        textDecoration: 'inherit',
        backgroundColor: '#FFFF00',
    },
});
