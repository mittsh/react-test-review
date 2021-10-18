import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    root: { display: 'flex', alignItems: 'center' },
    checkbox: {
        appearance: 'none',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        height: '20px',
        width: '20px',
        borderRadius: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bdc3c7',
        transition: 'all 0.5s ease',
        '&:hover': {
            opacity: 0.8,
            cursor: 'pointer',
        },
        '&[checked]': {
            backgroundColor: '#2980b9',
        },
        '&[checked]:after': {
            content: '"✔"',
            color: 'white',
        },
    },
    label: {
        color: '#4c4c4c',
    },
});
