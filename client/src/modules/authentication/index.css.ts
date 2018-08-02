import { colors } from '../../theme/index.css'
import { style, media } from 'typestyle'

export const registrationLoginForm = style(
    {
        border: `1px solid ${colors['border-color']}`,
        borderRadius: '0 5px 5px 0',
        backgroundColor: colors['white-color'],
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '20px',
        minHeight: '700px',
        $debugName: 'registration-login-form',
    },
    media({ maxWidth: 1023 }, { paddingLeft: '0' })
)
export const registrationLoginFormNavTabs = style(
    {
        height: '100%',
        border: 'none',
        $debugName: 'nav-tabs',
    },
    media(
        { maxWidth: 1023 },
        {
            bottom: 'auto',
            height: 'auto',
            width: '100%',
        }
    )
)

export const registrationLoginFormNavItem = style(
    {
        marginBottom: '0',
        height: '50%',
        display: 'table',
        width: '50%',
        $debugName: 'nav-item',
    },
    media(
        { maxWidth: 1023 },
        {
            height: '100%',
            display: 'block',
            width: '50%',
            float: 'left',
            textAlign: 'center',
            $nest: {
                '&:last-child .nav-link': { borderBottom: '1px solid #e6ecf5' },
            },
        }
    )
)

const navLinkBorder = `1px solid ${colors['border-color']}`

export const registrationLoginFormNavLink = style(
    {
        borderRadius: '0',
        border: 'none',
        borderBottom: navLinkBorder,
        borderRight: navLinkBorder,
        borderLeft: navLinkBorder,
        padding: '25px',
        color: '#c0c4d8',
        fill: '#c0c4d8',
        backgroundColor: colors['white-color'],
        height: '100%',
        display: 'table-cell',
        verticalAlign: 'middle',
        $debugName: 'nav-link',
        $nest: {
            '&.active': {
                fill: '#fafbfd',
                backgroundColor: '#fafbfd',
                borderColor: 'white',
            },

            svg: {
                width: '21px',
                height: '21px',
            },
        },
    },
    media({ maxWidth: 1023 }, { display: 'block' })
)

export const registrationLoginFormTabContent = style({
    overflow: 'hidden',
    $debugName: 'tab-content',
})
