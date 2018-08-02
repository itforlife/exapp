import { colors } from '../theme/index.css'
import { stylesheet } from 'typestyle'

export const accountDashBoardStyle = stylesheet({
    uiBlock: {
        backgroundColor: colors['white-color'],
        borderRadius: '5px',
        border: `1px solid ${colors['border-color']}`,
        marginBottom: '15px',
        $nest: {
            '.ui-block-title:last-child': {
                borderBottom: '0',
            },
        },
    },
    uiBlockContent: {
        padding: '24px 23px 23px',
    },
})
