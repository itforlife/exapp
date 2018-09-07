import * as React from 'react';
import {
    checkboxContainerStyle,
    labelStyle,
    inputStyle,
    squareStyle,
    checkStyle,
    checkDisabledStyle,
    textStyle,
} from './CheckboxStyle.css';

export const Checkbox = props => (
    <div className={`checkbox ${checkboxContainerStyle}`}>
        <label className={labelStyle}>
            <input
                type="checkbox"
                name={props.name}
                checked={props.checked}
                disabled={props.disabled}
                className={inputStyle}
            />
            {props.checked && (
                <i
                    className={`fas fa-check ${checkStyle} ${props.disabled &&
                        checkDisabledStyle}`}
                />
            )}
            <i className={`far fa-square ${squareStyle}`} />
            <span className={textStyle}>{props.label}</span>
        </label>
    </div>
);
