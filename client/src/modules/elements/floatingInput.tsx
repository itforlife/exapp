import { observer } from 'mobx-react'
import React from 'react'

export const FloatingInput = observer(props => {
    return (
        <div>
            <label>{props.label}</label>
            <input {...props} />
        </div>
    )
})
