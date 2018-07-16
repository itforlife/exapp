import React from 'react'
import classnames from 'classnames';

export const FloatingInput = (props) => {
    const floatingClassName = classnames(
        'form-group',
        'label-floating',
        {
            'is-empty': !props.value
        }
    )
    const onChange = (ev) => {
        return props.onChange(ev.target.name, ev.target.value);
    }
    const inputType = props.inputType ? props.inputType : 'text';
    return (
        <div className={floatingClassName}>
            <label className="control-label">{props.inputLabel}</label>
            <input 
                className="form-control"
                placeholder={props.placeholder} 
                type={inputType}
                onChange={onChange}
                name={props.name}
            />
        </div>
    );

}

