
import css from 'styled-jsx/css'
import {colors} from '../../theme/index.css';

export const contentStyle = css`
    $white-color: ${colors['white-color']};
    $border-color: ${colors['border-color']};
    .ripple-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: inherit;
        pointer-events: none;
      }
    .ui-block-content {
        padding: 24px 23px 23px;
    }
    .ui-block-title {
        padding: 23px 25px 18px;
        line-height: 1;
        border-bottom: 1px solid $border-color;
        border-top: 1px solid $border-color;
        display: table;
        width: 100%;
        position: relative;
        border-radius: 5px 5px 0 0;
      
        .more {
          padding-left: 25px;
          text-align: right;
          width: 16px;
        }
      
        & > * {
          margin-bottom: 0;
          display: table-cell;
          vertical-align: middle;
        }
      
        &.ui-block-title-small {
          padding: 10px 25px;
          .title {
            font-size: 9px;
            text-transform: uppercase;
            color: #9a9fbf;
          }
        }
      
        &:first-child {
          border-top: none;
        }
      
        .btn {
          display: inline-block;
          margin-bottom: 0;
      
          & + * {
            margin-left: 20px;
          }
      
        }
      
        &.inline-items {
          .more {
            float: right;
            margin-top: 6px;
            padding-left: 0;
          }
        }
    }
`;