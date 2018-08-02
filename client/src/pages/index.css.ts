import { style, keyframes } from 'typestyle'
import { colors } from '../theme/index.css'

export const langindPage = style({
    position: 'relative',
    minHeight: '100vh',
})
export const contentBgWrap = style({
    background: 'url(/assets/img/landing-users.png) repeat 0 0',
    animation: 'sidedownscroll 30s linear infinite',
    $nest: {
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(255, 94, 58, 0.95)',
            opacity: 1,
            zIndex: 'auto',
        },
    },
})

export const landingContent = style({
    color: colors['white-color'],
    marginBottom: '30px',
    $nest: {
        '& > *:first-child': {
            fontWeight: 300,
        },
        '& > *:last-child': {
            marginBottom: '0',
        },
        '& > *': {
            color: 'inherit',
            marginBottom: '45px',
        },
    },
})

export const headerSpacerStandard = style({
    marginBottom: '138px',
})
export const displayFlex = style({
    display: 'flex',
    alignItems: 'center',
    $nest: {
        '&.content-center': {
            justifyContent: 'center',
        },

        '&.content-around': {
            justifyContent: 'space-around',
        },
    },
})
export const sidedownscroll = keyframes({
    '0%': {
        backgroundPosition: '0 0',
    },
    '100%': {
        backgroundPosition: '-2000px 2000px',
    },
})