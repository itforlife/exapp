import { style } from 'typestyle';

export const formGroupStyle = style({
    position: 'relative',
});

export const labelStyle = style({
    color: '#888da8',
    position: 'absolute',
    pointerEvents: 'none',
    transition: '.3s ease all',
    fontSize: '14px',
    lineHeight: 1.4,
    top: '18px',
    left: '20px',
});

const labelActiveStyle = {
    top: '10px',
    fontSize: '11px',
};

export const inputStyle = style({
    color: '#515365',
    fontSize: '0.875rem',
    height: 'auto',
    padding: '1.5rem 1.1rem .5rem',
    lineHeight: 1.75,
    $nest: {
        '&:focus': {
            borderColor: '#ffc6ba',
            outline: 0,
            boxShadow: 'none',
        },
        '&:focus+label': labelActiveStyle,
        '&:valid+label': labelActiveStyle,
    },
});
