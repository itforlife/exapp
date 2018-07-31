import css from 'styled-jsx/css'

export const floatingInputStyles = css`
  .form-group {
    position: relative;
    margin-bottom: 1.4rem;
  }
  .label-floating {
    .form-control,
    input,
    select {
      padding: 1.5rem 1.1rem 0.5rem;
      line-height: 1.75;
    }

    textarea.form-control {
      padding: 1.5rem 1.1rem 0.2rem;
    }

    &.with-icon {
      .form-control,
      input,
      textarea {
        padding-left: 70px;
      }
    }
  }
  .form-group.label-floating.is-select label.control-label {
    top: 8px;
    font-size: 11px;
    line-height: 1.42857;
    z-index: 9;
  }
  .form-group.label-floating label.control-label,
  .form-group.label-placeholder label.control-label {
    top: 18px;
    font-size: 14px;
    line-height: 1.42857;
    left: 20px;
  }

  .form-group.label-static label.control-label,
  .form-group.label-floating.is-focused label.control-label,
  .form-group.label-floating:not(.is-empty) label.control-label,
  .form-group.has-bootstrap-select label.control-label {
    top: 10px;
    font-size: 11px;
    line-height: 1.07143;
  }
  .label-floating.with-icon label.control-label,
  .label-placeholder.with-icon label.control-label {
    left: 70px;
  }
  .form-group.label-floating.is-focused .control-label,
  .form-group.label-floating.has-bootstrap-select .control-label {
    top: 16px;
  }
  .form-group.label-floating
    .bootstrap-select.btn-group
    .dropdown-toggle
    .filter-option {
    top: 5px;
    position: relative;
  }
  .form-group.label-static label.control-label,
  .form-group.label-placeholder label.control-label,
  .form-group.label-floating label.control-label {
    position: absolute;
    pointer-events: none;
    transition: 0.3s ease all;
  }
  @media (max-width: 1024px) {
    .form-group.label-floating label.control-label,
    .form-group.label-placeholder label.control-label {
      left: 15px;
    }
  }
  @media (max-width: 360px) {
    .form-group.label-floating label.control-label,
    .form-group.label-placeholder label.control-label {
      font-size: 12px;
    }
  }
`
