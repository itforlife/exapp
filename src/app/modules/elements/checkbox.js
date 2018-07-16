import React from 'react'
import {indexStyles} from './index.css';


export const Checkbox = (props) => {

    return (
        <div className="checkbox">
            <label>
                <input name={props.name} type="checkbox" />
                <span className="checkbox-material"><span className="check"></span></span>
                {props.label}
            </label>
            <style jsx>{indexStyles}</style>

        </div>
    )

}