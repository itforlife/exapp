import css from 'styled-jsx/css'
import {colors } from '../theme/index.css';

export const accountDashBoardStyle = css`
    $white-color: ${colors['white-color']};
    $border-color: ${colors['border-color']};
    .ui-block {
        background-color: $white-color;
        border-radius: 5px;
        border: 1px solid $border-color;
        margin-bottom: 15px;
    
        .ui-block-title:last-child {
            border-bottom: 0;
        }
    }
    
    .ui-block-content {
        padding: 24px 23px 23px;
    }
`;