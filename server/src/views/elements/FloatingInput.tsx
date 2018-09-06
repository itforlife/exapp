import * as React from 'react';
import {
    formGroupStyle,
    labelStyle,
    inputStyle,
    successIconStyle,
    errorIconStyle,
} from './FloatingInputStyle.css';

interface IFloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    success?: boolean;
    error?: boolean;
    label: string;
    type?: string;
}
export const FloatingInput = ({success, error, label, ...inputProps}: IFloatingInputProps) => (
    <div className={`form-group ${formGroupStyle}`}>
        <input
            {...inputProps}
            type={inputProps.type || 'text'}
            className={`${inputStyle} form-control`}
            required={true}
        />
        <label className={labelStyle}>{label}</label>
        {success && (
            <i className={`fas fa-check-circle ${successIconStyle}`} />
        )}
        {error && (
            <i className={`fas fa-times-circle ${errorIconStyle}`} />
        )}
    </div>
);