import React from 'react';
import { observer } from 'mobx-react';
import {
    formGroupStyle,
    labelStyle,
    inputStyle,
    successIconStyle,
    errorIconStyle,
} from './FloatingInputStyle.css';

export const FloatingInput = observer(props => (
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
));
