import React from 'react'
import {buttonsStyles} from './buttons.css';

export const Button = (props) => {

    return (
        <div>
            <a href="#" 
                className={props.className} 
                onClick={props.onClick}
                {...props}
            >
                {props.children}
            </a>
            <style jsx>{buttonsStyles}</style>
        </div>

    )

}