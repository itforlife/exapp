import { style } from 'typestyle'

export const check = style({
    boxSizing: 'border-box',
    position: 'relative',
    display: 'inline-block',
    width: '20px',
    height: '20px',
    zIndex: 1,
    borderImageSource: 'none',
    borderImageSlice: '100%',
    borderImageWidth: 1,
    borderImageOutset: 0,
    borderImageRepeat: 'stretch',
    overflow: 'hidden',
    border: '1px solid #E6ECF5',
})

export const checked = style({
    background: '#FF5E3A',
    $nest: {
        '&::before': {
            boxSizing: 'border-box',
            position: 'absolute',
            content: '""',
            transform: 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)',
            display: 'block',
            boxShadow:
                '#FFFFFF 0px 0px 0px 10px, #FFFFFF 10px -10px 0px 10px, rgb(255, 255, 255) 32px 0px 0px 20px, rgb(255, 255, 255) 0px 32px 0px 20px, rgb(255, 255, 255) -5px 5px 0px 10px, rgb(255, 255, 255) 20px -12px 0px 11px',
            color: 'red',
            margin: '-3px 7px',
        },
    },
})

export const checkbox = style({ boxSizing: 'border-box', margin: '10px' })

export const labelCls = style({
    boxSizing: 'border-box',
    display: 'inline-block',
    cursor: 'pointer',
    margin: 0,
    padding: 0,
})

export const optionsCheckboxes = style({
    display: 'none',
})

export const checkboxMaterial = style({
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    position: 'relative',
    top: '1px',
    display: 'inline-block',
    padding: '5px',
})
