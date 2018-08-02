import { style } from 'typestyle'

export const registerContent = style({
    padding: '35px 25px',
    $debugName: 'content',
})

export const registerTitle = style({
    padding: '25px',
    marginBottom: '0',
    $debugName: 'title',
})

export const registerRemember = style({
    marginBottom: '1rem',
    $debugName: 'remember',
    $nest: {
        a: {
            lineHeight: '2',
        },
    },
})
