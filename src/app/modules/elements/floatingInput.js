import React from 'react'
import classnames from 'classnames';
import { observer } from 'mobx-react'

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
        </div>
    );

})

