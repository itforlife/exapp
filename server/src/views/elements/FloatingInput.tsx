import * as React from 'react';
import {
    formGroupStyle,
    labelStyle,
    inputStyle,
    successIconStyle,
    errorIconStyle,
} from './FloatingInputStyle.css';

export const FloatingInput = props => (
    <div className={`form-group ${formGroupStyle}`}>
        <input
            className={`${inputStyle} form-control`}
            type="text"
            disabled={props.disabled}
            placeholder={props.placeholder}
            value={props.value}
            required={true}
        />
        <label className={labelStyle}>{props.label}</label>
        {props.success && (
            <i className={`fas fa-check-circle ${successIconStyle}`} />
        )}
        {props.error && (
            <i className={`fas fa-times-circle ${errorIconStyle}`} />
        )}
    </div>
);