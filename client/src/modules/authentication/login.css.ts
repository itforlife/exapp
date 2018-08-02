import { colors } from '../../theme/index.css'
import { style } from 'typestyle'

export const loginContent = style({
    padding: '35px 25px',
    $debugName: 'content',
    $nest: {
        p: {
            marginBottom: '0',
            fontSize: '13px',
        },
    },
})
export const loginTitle = style({
    padding: '25px',
    marginBottom: '0',
    $debugName: 'title',
})
export const loginRemember = style({
    marginBottom: '1rem',
    $debugName: 'remember',
    $nest: {
        a: {
            lineHeight: '2',
        },
    },
})
export const loginForgot = style({
    float: 'right',
    color: colors['body-font-color'],
    $debugName: 'forgot',
})
export const or = style({
    position: 'relative',
    width: '100%',
    height: '1px',
    margin: '1rem 0 2rem 0',
    backgroundColor: colors['border-color'],
    $debugName: 'or',
    $nest: {
        '&:after': {
            content: 'OR',
            display: 'block',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: colors['white-color'],
            padding: '0 25px',
            fontSize: '10px',
            zIndex: 5,
        },
    },
})
