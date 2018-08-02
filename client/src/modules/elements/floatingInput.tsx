import classnames from 'classnames'
import { observer } from 'mobx-react'
import React from 'react'
import * as indexStyles from './floatingInput.css'

export const FloatingInput = observer(props => {
    const floatingClassName = classnames('form-group', 'label-floating', {
        'is-empty': !props.value,
    })
    return (
        <div
            className={`${indexStyles.formGroup} ${
                indexStyles.labelFloating
            } ${floatingClassName}`}
        >
            <label className="control-label">{props.label}</label>
            <input className="form-control" {...props} />
        </div>
    )
})
