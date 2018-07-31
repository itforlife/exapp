import css from 'styled-jsx/css'
import { colors } from '../theme/index.css'

export const indexStyles = css`
    $white-color: ${colors['white-color']};
    .landing-page {
        position: relative;
        min-height: 100vh;

        .content-bg-wrap {
            background: url('/assets/img/landing-users.png') repeat 0 0;
            animation: sidedownscroll 30s linear infinite;

            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba(255, 94, 58, 0.95);
                opacity: 1;
                z-index: auto;
            }

            @keyframes sidedownscroll {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: -2000px 2000px;
                }
            }
        }

        .header-spacer--standard {
            margin-bottom: 138px;
        }
    }
    .content-bg-wrap {
        /*position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;*/

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        text-align: center;
        box-sizing: border-box;
        animation: slide 50s linear infinite;
        will-change: background-position;
        background-size: contain;
    }
    .header-spacer--standard {
        height: 10px;
    }
    .display-flex {
        display: flex;
        align-items: center;

        &.content-center {
            justify-content: center;
        }

        &.content-around {
            justify-content: space-around;
        }
    }

    .landing-content {
        color: $white-color;
        margin-bottom: 30px;

        & > *:first-child {
            font-weight: 300;
        }

        & > *:last-child {
            margin-bottom: 0;
        }

        & > * {
            color: inherit;
            margin-bottom: 45px;
        }
    }
`
