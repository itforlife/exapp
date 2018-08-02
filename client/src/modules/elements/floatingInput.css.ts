import { style, media } from 'typestyle'

export const labelFloating = style({
    $nest: {
        '.form-control, input, select': {
            padding: '1.5rem 1.1rem 0.5rem',
            lineHeight: '1.75',
        },
        'textarea.form-control': {
            padding: '1.5rem 1.1rem 0.2rem',
        },
        '&.with-icon': {
            $nest: {
                '.form-control, input,textarea': {
                    paddingLeft: '70px',
                },
            },
        },
        '&.with-icon label.control-label, .label-placeholder.with-icon label.control-label': {
            left: '70px',
        },
    },
})

export const formGroup = style(
    {
        position: 'relative',
        marginBottom: '1.4rem',
        $nest: {
            '&.label-floating.is-select label.control-label': {
                top: '8px',
                fontSize: '11px',
                lineHeight: 1.42857,
                zIndex: 9,
            },
            '&.label-floating label.control-label, &.label-placeholder label.control-label': {
                top: '18px',
                fontSize: '14px',
                lineHeight: 1.42857,
                left: '20px',
            },
            '&.label-static label.control-label, &.label-floating.is-focused label.control-label, &.label-floating:not(.is-empty) label.control-label, &.has-bootstrap-select label.control-label': {
                top: '10px',
                fontSize: '11px',
                lineHeight: 1.07143,
            },
            '&.label-floating.is-focused .control-label, &.label-floating.has-bootstrap-select .control-label': {
                top: '16px',
            },
            '&.label-floating .bootstrap-select.btn-group .dropdown-toggle .filter-option': {
                top: '5px',
                position: 'relative',
            },
            '&.label-static label.control-label, &.label-placeholder label.control-label, &.label-floating label.control-label': {
                position: 'absolute',
                pointerEvents: 'none',
                transition: '0.3s ease all',
            },
        },
    },
    media(
        { maxWidth: '1024px' },
        {
            $nest: {
                '.label-floating label.control-label, .label-placeholder label.control-label': {
                    left: '15px',
                },
            },
        },
        media(
            { maxWidth: '360px' },
            {
                $nest: {
                    '.label-floating label.control-label, .label-placeholder label.control-label': {
                        fontSize: '12px',
                    },
                },
            }
        )
    )
)
