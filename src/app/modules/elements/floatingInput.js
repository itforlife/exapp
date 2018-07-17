import React from 'react'
import classnames from 'classnames';
import { observer } from 'mobx-react'
import {floatingInputStyles} from './floatingInput.css';

export const FloatingInput = observer((props) => {
    const floatingClassName = classnames(
        'form-group',
        'label-floating',
        {
            'is-empty': !props.value
        }
    )
    return (
        <div className={floatingClassName}>
            <label className="control-label">{props.label}</label>
            <input 
                className="form-control"
                {...props}
            />
            <style jsx>{floatingInputStyles}</style>
        </div>
    );

})

