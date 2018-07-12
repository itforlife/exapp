import React from 'react'


export const Checkbox = (props) => {

    return (
        <div className="checkbox">
            <label>
                <input name={props.name} type="checkbox" />
                <span className="checkbox-material"><span className="check"></span></span>
                {props.label}
            </label>
        </div>
    )

}