import React from 'react'
import { checkboxStyles } from './checkbox.css'

export const Checkbox = props => {
    return (
        <div className="checkbox">
            <label>
                <input name={props.name} type="checkbox" />
                <span className="checkbox-material">
                    <span className="check" />
                </span>
                {props.label}
            </label>
            <style jsx>{checkboxStyles}</style>
        </div>
    )
}
